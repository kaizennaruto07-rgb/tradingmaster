export const meta = {
  name: "tradingmaster-content-pipeline",
  description: "Agentic AdSense-grade content production for Tradingmaster: strategist, researcher, outline, writer, parallel value/originality/fact-check reviews, SEO, readability, trust/policy reviews, final editor decision with bounded revision loop, and AdSense pre-publish gate. Nothing is published without approval.",
  phases: [
    { name: "plan", title: "Strategy and research", detail: "Strategist scopes the topic; researcher verifies every material fact." },
    { name: "draft", title: "Outline and draft", detail: "Outline structures the article; writer produces a versioned draft." },
    { name: "review", title: "Review gates", detail: "Value, originality, and fact-check run in parallel; then SEO, readability, and trust/policy." },
    { name: "decide", title: "Final decision", detail: "Final editor approves, requests revision, or rejects; approved pieces face the AdSense gate." }
  ]
};

const inputs = args ?? {};
const topic = inputs.topic;
const audience = inputs.audience || "Indian retail traders (beginners to advanced)";
const existingArticles = inputs.existing_articles || [];

if (!topic || String(topic).trim() === "") {
  return {
    __hatchWorkflowControl: "blocked",
    result: {
      blocked_reason: "missing_topic",
      message: "Launch with args.topic, e.g. { topic: 'How stop-loss orders work on NSE' }."
    }
  };
}

function slugify(s) {
  const clean = String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return (clean.slice(0, 60) || "article");
}

const slug = slugify(topic);
const draftsDir = "workspace/tradingmaster-pipeline/drafts/" + slug;
const briefBase = "workspace/skills/content-pipeline/agents/";

function brief(n) {
  return briefBase + n;
}

// ---------- Schemas (result envelopes for each agent) ----------

const strategistSchema = {
  type: "object",
  required: ["working_title", "search_intent", "target_audience", "main_question", "unique_value", "suggested_outline", "related_articles", "differentiation"],
  properties: {
    working_title: { type: "string" },
    search_intent: { type: "string" },
    target_audience: { type: "string" },
    main_question: { type: "string" },
    unique_value: { type: "string" },
    suggested_outline: { type: "array", items: { type: "string" } },
    related_articles: { type: "array", items: { type: "string" } },
    differentiation: { type: "string" }
  }
};

const researcherSchema = {
  type: "object",
  required: ["facts", "warnings", "key_sources"],
  properties: {
    facts: {
      type: "array",
      items: {
        type: "object",
        required: ["claim", "status"],
        properties: {
          claim: { type: "string" },
          status: { type: "string" },
          source: { type: "string" },
          date: { type: "string" },
          note: { type: "string" }
        }
      }
    },
    warnings: { type: "array", items: { type: "string" } },
    key_sources: { type: "array", items: { type: "string" } }
  }
};

const outlineSchema = {
  type: "object",
  required: ["title", "headings", "internal_link_opportunities", "notes"],
  properties: {
    title: { type: "string" },
    headings: {
      type: "array",
      items: {
        type: "object",
        required: ["level", "text", "purpose"],
        properties: {
          level: { type: "string" },
          text: { type: "string" },
          purpose: { type: "string" }
        }
      }
    },
    internal_link_opportunities: { type: "array", items: { type: "string" } },
    notes: { type: "string" }
  }
};

const writerSchema = {
  type: "object",
  required: ["title", "meta_description", "markdown_path", "word_count_approx", "summary"],
  properties: {
    title: { type: "string" },
    meta_description: { type: "string" },
    markdown_path: { type: "string" },
    word_count_approx: { type: "number" },
    summary: { type: "string" }
  }
};

const valueSchema = {
  type: "object",
  required: ["passed", "strengths", "weak_sections", "missing_information", "filler_sections", "claims_needing_verification", "recommended_improvements"],
  properties: {
    passed: { type: "boolean" },
    strengths: { type: "array", items: { type: "string" } },
    weak_sections: { type: "array" },
    missing_information: { type: "array", items: { type: "string" } },
    filler_sections: { type: "array", items: { type: "string" } },
    claims_needing_verification: { type: "array", items: { type: "string" } },
    recommended_improvements: { type: "array", items: { type: "string" } }
  }
};

const originalitySchema = {
  type: "object",
  required: ["passed", "duplicate_ideas", "cannibalizing_topics", "reused_paragraphs", "recommendation", "notes"],
  properties: {
    passed: { type: "boolean" },
    duplicate_ideas: { type: "array" },
    cannibalizing_topics: { type: "array", items: { type: "string" } },
    reused_paragraphs: { type: "array", items: { type: "string" } },
    recommendation: { type: "string" },
    notes: { type: "string" }
  }
};

const factcheckSchema = {
  type: "object",
  required: ["passed", "issues"],
  properties: {
    passed: { type: "boolean" },
    issues: {
      type: "array",
      items: {
        type: "object",
        required: ["claim", "classification", "evidence"],
        properties: {
          claim: { type: "string" },
          classification: { type: "string" },
          evidence: { type: "string" }
        }
      }
    }
  }
};

const seoSchema = {
  type: "object",
  required: ["passed", "title_ok", "meta_description", "edits_made", "issues", "markdown_path"],
  properties: {
    passed: { type: "boolean" },
    title_ok: { type: "boolean" },
    meta_description: { type: "string" },
    edits_made: { type: "array", items: { type: "string" } },
    issues: { type: "array", items: { type: "string" } },
    markdown_path: { type: "string" }
  }
};

const readabilitySchema = {
  type: "object",
  required: ["passed", "edits_made", "remaining_issues", "markdown_path"],
  properties: {
    passed: { type: "boolean" },
    edits_made: { type: "array", items: { type: "string" } },
    remaining_issues: { type: "array", items: { type: "string" } },
    markdown_path: { type: "string" }
  }
};

const trustSchema = {
  type: "object",
  required: ["passed", "flags", "disclaimers_needed"],
  properties: {
    passed: { type: "boolean" },
    flags: {
      type: "array",
      items: {
        type: "object",
        required: ["type", "severity", "detail", "fix"],
        properties: {
          type: { type: "string" },
          severity: { type: "string" },
          detail: { type: "string" },
          fix: { type: "string" }
        }
      }
    },
    disclaimers_needed: { type: "array", items: { type: "string" } }
  }
};

const finalEditorSchema = {
  type: "object",
  required: ["decision", "checklist", "required_changes", "rejection_reason", "summary"],
  properties: {
    decision: { type: "string" },
    checklist: { type: "object" },
    required_changes: { type: "array", items: { type: "string" } },
    rejection_reason: { type: "string" },
    summary: { type: "string" }
  }
};

const adsenseGateSchema = {
  type: "object",
  required: ["passed", "failed_items", "notes"],
  properties: {
    passed: { type: "boolean" },
    failed_items: {
      type: "array",
      items: {
        type: "object",
        required: ["item", "evidence"],
        properties: {
          item: { type: "string" },
          evidence: { type: "string" }
        }
      }
    },
    notes: { type: "array", items: { type: "string" } }
  }
};

// ---------- Stage helpers ----------

function runWriter(attempt, feedback) {
  const version = "draft-v" + attempt + ".md";
  const draftPath = draftsDir + "/" + version;
  let prompt = "Read your full operating brief at " + brief("04-writer.md") + " and follow it exactly.\n\n" +
    "Write the article as Markdown to this path: " + draftPath + "\n" +
    "Title: " + outline.title + "\n" +
    "Outline headings: " + JSON.stringify(outline.headings) + "\n" +
    "Writer notes: " + outline.notes + "\n" +
    "Verified research: " + JSON.stringify(research) + "\n" +
    "Strategist context: " + JSON.stringify({ unique_value: strategy.unique_value, differentiation: strategy.differentiation, main_question: strategy.main_question }) + "\n" +
    "Audience: " + audience + "\n";
  if (feedback) {
    prompt += "\nTHIS IS A REVISION ROUND. Address every item below precisely.\n" + feedback + "\nWrite a NEW versioned file (" + version + "); never overwrite earlier versions.\n";
  }
  prompt += "\nReturn ONLY the JSON object specified in your brief.";
  return agent(prompt, { key: "writer-" + attempt, label: "Content writer (attempt " + attempt + ")", timeoutMs: 900000, schema: writerSchema });
}

function runParallelReviews(draftPath, attempt) {
  const prefix = "rev" + attempt + "-";
  const results = parallel([
    function () {
      return agent(
        "Read your full operating brief at " + brief("05-value-reviewer.md") + " and follow it exactly.\n\n" +
        "Draft to review (read this file): " + draftPath + "\n" +
        "Return ONLY the JSON object specified in your brief.",
        { key: prefix + "value", label: "Human value reviewer", timeoutMs: 600000, schema: valueSchema }
      );
    },
    function () {
      return agent(
        "Read your full operating brief at " + brief("06-originality.md") + " and follow it exactly.\n\n" +
        "Draft to review (read this file): " + draftPath + "\n" +
        "Existing Tradingmaster articles: " + JSON.stringify(existingArticles) + "\n" +
        "Return ONLY the JSON object specified in your brief.",
        { key: prefix + "originality", label: "Originality reviewer", timeoutMs: 600000, schema: originalitySchema }
      );
    },
    function () {
      return agent(
        "Read your full operating brief at " + brief("07-fact-checker.md") + " and follow it exactly.\n\n" +
        "Draft to review (read this file): " + draftPath + "\n" +
        "Research brief for cross-check: " + JSON.stringify(research) + "\n" +
        "Return ONLY the JSON object specified in your brief.",
        { key: prefix + "factcheck", label: "Fact checker", timeoutMs: 600000, schema: factcheckSchema }
      );
    }
  ], { concurrency: 3 });
  return results;
}

function runReviewChain(firstDraftPath, attempt) {
  const parallelResults = runParallelReviews(firstDraftPath, attempt);
  const value = parallelResults[0];
  const originality = parallelResults[1];
  const factcheck = parallelResults[2];
  if (!value || !originality || !factcheck) {
    return null;
  }
  const reviewSummary = JSON.stringify({
    value: { passed: value.passed, recommended_improvements: value.recommended_improvements, claims_needing_verification: value.claims_needing_verification },
    originality: { passed: originality.passed, recommendation: originality.recommendation, notes: originality.notes },
    factcheck: { passed: factcheck.passed, issues: factcheck.issues }
  });

  const seo = agent(
    "Read your full operating brief at " + brief("08-seo-editor.md") + " and follow it exactly.\n\n" +
    "Draft (read this file): " + firstDraftPath + "\n" +
    "Prior review findings: " + reviewSummary + "\n" +
    "Save any edits as a NEW versioned file; never overwrite. Return ONLY the JSON object specified in your brief.",
    { key: "seo-" + attempt, label: "SEO editor (attempt " + attempt + ")", timeoutMs: 600000, schema: seoSchema }
  );

  const readability = agent(
    "Read your full operating brief at " + brief("09-readability-editor.md") + " and follow it exactly.\n\n" +
    "Draft (read this file): " + seo.markdown_path + "\n" +
    "Save any edits as a NEW versioned file; never overwrite. Return ONLY the JSON object specified in your brief.",
    { key: "readability-" + attempt, label: "Readability editor (attempt " + attempt + ")", timeoutMs: 600000, schema: readabilitySchema }
  );

  const trust = agent(
    "Read your full operating brief at " + brief("10-trust-reviewer.md") + " and follow it exactly.\n\n" +
    "Draft (read this file): " + readability.markdown_path + "\n" +
    "Return ONLY the JSON object specified in your brief.",
    { key: "trust-" + attempt, label: "Trust and policy reviewer (attempt " + attempt + ")", timeoutMs: 600000, schema: trustSchema }
  );

  return {
    value: value,
    originality: originality,
    factcheck: factcheck,
    seo: seo,
    readability: readability,
    trust: trust,
    finalDraftPath: readability.markdown_path
  };
}

function runFinalEditor(reviews, attempt) {
  const reviewSummary = JSON.stringify({
    value: { passed: reviews.value.passed, weak_sections: reviews.value.weak_sections, missing_information: reviews.value.missing_information, filler_sections: reviews.value.filler_sections },
    originality: { passed: reviews.originality.passed, recommendation: reviews.originality.recommendation, notes: reviews.originality.notes },
    factcheck: { passed: reviews.factcheck.passed, issues: reviews.factcheck.issues },
    seo: { passed: reviews.seo.passed, issues: reviews.seo.issues },
    readability: { passed: reviews.readability.passed, remaining_issues: reviews.readability.remaining_issues },
    trust: { passed: reviews.trust.passed, flags: reviews.trust.flags, disclaimers_needed: reviews.trust.disclaimers_needed }
  });
  return agent(
    "Read your full operating brief at " + brief("11-final-editor.md") + " and follow it exactly.\n\n" +
    "Final draft (read this file): " + reviews.finalDraftPath + "\n" +
    "Reviewer findings: " + reviewSummary + "\n\n" +
    "Review the complete article INDEPENDENTLY with fresh eyes. " +
    "Do not approve just because reviewers passed it. Return ONLY the JSON decision object from your brief.",
    { key: "final-editor-" + attempt, label: "Final editor (attempt " + attempt + ")", timeoutMs: 600000, schema: finalEditorSchema }
  );
}

function summarizeIssues(reviews) {
  return JSON.stringify({
    value_improvements: reviews.value.recommended_improvements,
    value_missing: reviews.value.missing_information,
    value_filler: reviews.value.filler_sections,
    originality: { recommendation: reviews.originality.recommendation, notes: reviews.originality.notes },
    fact_issues: reviews.factcheck.issues,
    seo_issues: reviews.seo.issues,
    readability_issues: reviews.readability.remaining_issues,
    trust_flags: reviews.trust.flags,
    trust_disclaimers: reviews.trust.disclaimers_needed
  });
}

// ---------- Pipeline ----------

phase("plan");
log("Pipeline started for topic: " + topic);

const strategy = agent(
  "Read your full operating brief at " + brief("01-strategist.md") + " and follow it exactly.\n\n" +
  "Requested topic: " + topic + "\n" +
  "Audience: " + audience + "\n" +
  "Existing Tradingmaster articles: " + JSON.stringify(existingArticles) + "\n\n" +
  "Return ONLY the JSON object specified in your brief.",
  { key: "strategist", label: "Content strategist", timeoutMs: 300000, schema: strategistSchema }
);

const research = agent(
  "Read your full operating brief at " + brief("02-researcher.md") + " and follow it exactly.\n\n" +
  "Working title: " + strategy.working_title + "\n" +
  "Main question: " + strategy.main_question + "\n" +
  "Suggested outline: " + JSON.stringify(strategy.suggested_outline) + "\n\n" +
  "Use web search; prefer primary and authoritative sources. " +
  "Return ONLY the JSON object specified in your brief.",
  { key: "researcher", label: "Research agent", timeoutMs: 600000, schema: researcherSchema }
);

phase("draft");

const outline = agent(
  "Read your full operating brief at " + brief("03-outline.md") + " and follow it exactly.\n\n" +
  "Working title: " + strategy.working_title + "\n" +
  "Main question: " + strategy.main_question + "\n" +
  "Suggested outline: " + JSON.stringify(strategy.suggested_outline) + "\n" +
  "Research warnings: " + JSON.stringify(research.warnings) + "\n" +
  "Related articles for internal links: " + JSON.stringify(strategy.related_articles) + "\n\n" +
  "Return ONLY the JSON object specified in your brief.",
  { key: "outline", label: "Outline agent", timeoutMs: 300000, schema: outlineSchema }
);

phase("review");

let attempt = 1;
let writerResult = runWriter(1, null);
let reviews = runReviewChain(writerResult.markdown_path, 1);
if (!reviews) {
  return {
    __hatchWorkflowControl: "blocked",
    result: {
      blocked_reason: "reviewer_failed",
      message: "One of the parallel reviewers (value/originality/fact-check) failed on attempt 1. Draft: " + writerResult.markdown_path,
      draft: writerResult.markdown_path
    }
  };
}
let decision = runFinalEditor(reviews, 1);

while (decision.decision === "NEEDS_REVISION" && attempt < 2) {
  attempt = attempt + 1;
  log("Final editor requested revision (attempt " + attempt + ").");
  const feedback = "FINAL EDITOR REQUIRED CHANGES (address every item):\n" +
    JSON.stringify(decision.required_changes) + "\n\n" +
    "PRIOR REVIEW FINDINGS (also address):\n" + summarizeIssues(reviews);
  writerResult = runWriter(attempt, feedback);
  reviews = runReviewChain(writerResult.markdown_path, attempt);
  if (!reviews) {
    return {
      __hatchWorkflowControl: "blocked",
      result: {
        blocked_reason: "reviewer_failed",
        message: "One of the parallel reviewers failed on attempt " + attempt + ". Draft: " + writerResult.markdown_path,
        draft: writerResult.markdown_path
      }
    };
  }
  decision = runFinalEditor(reviews, attempt);
}

phase("decide");

if (decision.decision === "REJECT") {
  log("Article rejected by final editor.");
  return {
    status: "REJECTED",
    topic: topic,
    title: writerResult.title,
    draft_path: reviews.finalDraftPath,
    attempts: attempt,
    reason: decision.rejection_reason,
    message: "The final editor REJECTED this article: " + decision.rejection_reason + " Draft kept at " + reviews.finalDraftPath + " for reference; it must not be published."
  };
}

if (decision.decision === "NEEDS_REVISION") {
  return {
    __hatchWorkflowControl: "blocked",
    result: {
      blocked_reason: "revision_limit_reached",
      message: "Revision limit (2 attempts) reached. A human must decide: apply the required changes manually or drop the topic.",
      required_changes: decision.required_changes,
      summary: decision.summary,
      draft: reviews.finalDraftPath,
      topic: topic
    }
  };
}

log("Article approved by final editor. Running AdSense pre-publish gate.");

const gate = agent(
  "Read your full operating brief at " + brief("12-adsense-gate.md") + " and follow it exactly.\n\n" +
  "Approved draft (read this file): " + reviews.finalDraftPath + "\n" +
  "Return ONLY the JSON object specified in your brief.",
  { key: "adsense-gate", label: "AdSense pre-publish gate", timeoutMs: 600000, schema: adsenseGateSchema }
);

if (!gate.passed) {
  return {
    __hatchWorkflowControl: "blocked",
    result: {
      blocked_reason: "adsense_gate_failed",
      message: "Final editor approved, but the AdSense pre-publish gate FAILED. Fix the failed items before this article may be staged.",
      failed_items: gate.failed_items,
      notes: gate.notes,
      draft: reviews.finalDraftPath,
      topic: topic
    }
  };
}

return {
  status: "APPROVED_AND_GATED",
  topic: topic,
  title: writerResult.title,
  meta_description: writerResult.meta_description,
  draft_path: reviews.finalDraftPath,
  attempts: attempt,
  summary: decision.summary,
  message: "Article '" + writerResult.title + "' passed all 11 agents and the AdSense pre-publish gate in " + attempt + " attempt(s). It is cleared for staging and publishing — no further content review needed. Draft: " + reviews.finalDraftPath
};
