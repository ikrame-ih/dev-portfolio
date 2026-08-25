# Research: GenAI / agent-engineer job language (2025–2026)

**Purpose.** Keyword map from **primary JDs** (company career pages or aggregators that quote the full description) for titles like AI Prompt Engineer, AI Agent Engineer, GenAI Engineer, AI Software Engineer, RAG Engineer, LLM Engineer. Geography: Spain, EU/remote, plus US/UK-style English ATS (Accenture, Citi).

**Method.** Claims below are tied to a URL. Aggregator pages are used only when they reprint the JD body. Pages that 404’d after search snippets are marked.

**Not this file.** This is **not** a claim that Ikrame has shipped production agent platforms. Current public resume language is backend Python plus **applied AI on ReckonFlow** (structured LLM extraction, embeddings, hybrid retrieval). See [Honesty vs this candidate](#honesty-vs-this-candidate).

**Retrieved.** 25 Aug 2026.

---

## How employers use “production” vs “uses ChatGPT”

Across these JDs, **production** almost never means “I chat with ChatGPT at work.” It means **software that other people (or other systems) depend on**, with some combination of:

| Phrase in JDs | What they are screening for | Typical sources |
| --- | --- | --- |
| **Production-grade / production-ready / soluciones productivas** | Deployed services: Docker, CI/CD, APIs, monitoring, not a notebook demo | Cibernos “Docker y despliegue de soluciones productivas”; Accenture Senior “production-grade AI applications”; Citi “production-ready Python services” |
| **LLMOps / AgentOps / MLOps** | Prompt/model versioning, eval gates, observability, cost, incident response | Accenture Senior (LLMOps and AgentOps, CI/CD, automated evaluation); Citi Lead (MLOps, observability, governance) |
| **Guardrails / Responsible AI / normativa europea de IA** | Safety, privacy, bias, auditability, human-in-the-loop — not “I enabled ChatGPT” | Logicalis; Capitole “prompt evaluation y guardrails”; Accenture; Citi |
| **Latency, cost, token tracking** | Model routing and FinOps on live traffic | Accenture Full Stack (token cost tracking); OpenAI “planners vs workhorses” (vendor docs, not a JD) |
| **AI-assisted development (Cursor, Copilot)** | **How you write code**, not a GenAI product. Accenture Junior treats this as **daily workflow**, separate from building RAG/agents for clients | [Accenture Junior GenAI Engineer](https://www.accenture.com/us-en/careers/jobdetails?id=R00318994_en) |

**Honest mapping for a resume.**

- **Shipping GenAI product features:** RAG pipelines, agents with tools, evals, vector stores, APIs that call models, observability. That is what Spain “AI Agent Engineer” / “Software Engineer IA” ads describe.
- **AI-assisted coding:** Cursor, Copilot, worktrees, skills. Accenture **names Cursor as a coding tool**. Do **not** relabel that as “LangGraph production agentic systems” unless you actually built those systems.

---

## Posting cards

### 1. Logicalis Spain — AI Prompt & Agent Engineer

| Field | Value |
| --- | --- |
| **Title** | AI Prompt & Agent Engineer |
| **Company + URL** | Logicalis Spain — [careers.es.logicalis.com/jobs/7916800-ai-prompt-agent-engineer](https://careers.es.logicalis.com/jobs/7916800-ai-prompt-agent-engineer) (Teamtailor; first-party) |
| **Location** | Completamente remoto (Spain); listed under Analytics / Barcelona offices |
| **Posted salary on page** | Salario anual 35.000 € (as shown on the career page) |

**Repeated keywords (ES).** prompts avanzados; arquitectura de agentes; sistemas conversacionales; IA generativa; Responsible AI; zero‑shot, one‑shot, few‑shot, chain‑of‑thought, ReAct; orquestación; RAG; motores vectoriales; microservicios; APIs; pipelines de datos; benchmarks; métricas de rendimiento; sesgos; información sensible; NLP; LLMs; embeddings; normativa europea de IA.

**Responsibilities vs requirements.**

- **Do:** Diseñar y mantener prompts y frameworks reutilizables; aplicar estrategias de prompting (zero/one/few-shot, CoT, ReAct); orquestar agentes (RAG, vector DBs, microservicios, APIs, data pipelines); pruebas, benchmarks, métricas; políticas de Responsible AI.
- **Need:** IA generativa y NLP (LLMs); prompts avanzados; arquitecturas multiagente y RAG; vector DB / embeddings; APIs y microservicios; evaluación de agentes; Responsible AI y normativa europea.

**Production vs chat.** This is **client Data & AI delivery** (ingeniería de datos, IA, gobierno del dato), not “use ChatGPT.” Evaluation and Responsible AI are first-class. It is **not** asking for LangGraph by name.

---

### 2. Capitole — Software Engineer IA (LangChain / LangGraph / RAG / ITOps)

| Field | Value |
| --- | --- |
| **Title** | Software Engineer IA (aggregators also title it Ingeniero/a IA Multiagente LangChain - RAG) |
| **Company** | Capitole Consulting |
| **Full JD reprint** | [Jobijoba, published 15 Aug 2026](https://www.jobijoba.es/oferta-empleo/69/21d44897bb7493751ed60e5e36b4948d) |
| **Also quoting the same body** | [JobLeads](https://www.jobleads.com/es/job/software-engineer-ia--madrid--e968bcfee142231245adacd9f37e3a91b) (lists EUR 65.000–95.000; that range is **on JobLeads**, not in the Jobijoba body) |
| **Location** | Madrid, híbrido; cliente “líder en el sector de la seguridad”; IT Operations |

**Repeated keywords (ES + EN mixed).** arquitecturas agénticas; RAG; ITOps; LangChain; LangGraph; agentes de IA; workflows; orquestación; toma de decisiones autónomos; observabilidad; backlog y roadmap; prompt engineering; embeddings; pipelines de retrieval; sistemas multiagente; vector search; vector databases; OpenAI; Azure OpenAI; AWS Bedrock; prompt evaluation; guardrails; AWS AgentCore; Azure Foundry; serverless; microservicios; Python; REST APIs; event-driven; inglés B2–C1.

**Responsibilities vs requirements.**

- **Do:** Evolucionar soluciones IA en ITOps; diseñar arquitecturas agénticas y RAG; definir LangChain/LangGraph; desarrollar agentes y workflows; orquestación para decisiones autónomas; integrar sistemas corporativos y observabilidad; coordinar backlog/roadmap; mejorar modelos, retrieval y rendimiento de agentes (prompts, embeddings, retrieval pipelines).
- **Need:** 3–6 años “con este rol”; the stack above; Python avanzado.

**Production vs chat.** Explicit **ITOps product work**: corporate systems, observability, autonomous decision workflows. Guardrails and prompt evaluation are **requirements**, not optional ChatGPT usage.

Capitole’s own site discusses RAG and agentic architectures as **company capability**, not this JD: [capitole-consulting.com/solutions](https://www.capitole-consulting.com/solutions/), [LLM + RAG blog](https://www.capitole-consulting.com/blog/what-are-llms-and-what-are-their-limitations-2/).

---

### 3. Cibernos — Ingeniero de IA Agéntica / AI Agent Engineer

| Field | Value |
| --- | --- |
| **Title** | Ingeniero de IA Agéntica / AI Agent Engineer |
| **Company** | Cibernos (named on [Joblum](https://es.joblum.com/job/ingeniero-de-ia-agentica-ai-agent-engineer/2547771); same body on [InfoJobs](https://www.infojobs.net/madrid/ingeniero-ia-agentica-ai-agent-engineer/of-ic7b5e39e0a42c288aa57db6d6ddc6a) without the employer name in the fetched HTML) |
| **Location** | Madrid, híbrido; ≥3 años; indefinido |
| **Published** | 29 Jul 2026 (Joblum / InfoJobs) |

**Repeated keywords (ES + EN).** agentes inteligentes; razonar, planificar, utilizar herramientas; LLMs; arquitecturas multiagente; RAG; workflows agénticos; Function Calling; Tool Calling; chunking; embeddings; indexación; OpenAI; Anthropic Claude; Google Gemini; LangChain; LangGraph; CrewAI; Microsoft AutoGen; LlamaIndex; gestión de contexto y memoria; Pinecone; Weaviate; Chroma; FAISS; **MCP (Model Context Protocol)**; Azure OpenAI; AWS Bedrock; Google Vertex AI; observabilidad; Docker; **más allá del chat**.

**Responsibilities vs requirements.**

- **Do:** Decision logic, agentic workflows, multi-agent, RAG, prompting, API/knowledge integrations, function/tool calling; evaluate accuracy/quality; scalable architectures.
- **Need:** Solid Python; **one or more** of LangChain/LangGraph/CrewAI/AutoGen/LlamaIndex (they say you need not master all); one or more of OpenAI/Claude/Gemini; fundamentals listed above.
- **Nice:** Vector DBs, MCP, cloud AI platforms, observability, Docker, enterprise agents.

**Production vs chat.** The closer is explicit: *“llevar la IA más allá del chat.”* Production = Docker + enterprise agents + evaluation, not a chat UI demo.

---

### 4. NEORIS — Senior AI Engineer (GenAI & Agentic Systems) + related Greenhouse role

**A. Senior AI Engineer (GenAI & Agentic Systems)**

First-party Greenhouse listing for this exact title was **not** confirmed in this pass. Aggregators reprint a long English JD attributed to NEORIS (Colombia / LATAM sourcing; useful for **English ATS** even if the hire is not Spain):

- [Sercanto](https://co.sercanto.com/detail/a/senior-ai-engineer-genai-agentic-systems_bogota_42252265)

Quoted themes: production-grade software; multi-agent orchestration; tool usage; planning; memory; self-reflection; **Google ADK**; RAG; **context engineering**; **hybrid search**; **re-ranking**; latency/accuracy/cost; prompt engineering **governance**; evaluation (hallucination, precision/recall); observability/tracing; FastAPI; GCP; **2–3+ years deploying production-grade AI/LLM systems**; guardrails and PII.

**B. Senior Full-Stack AI Agentic Engineer (first-party)**

- [job-boards.eu.greenhouse.io/neoris/jobs/4881884101](https://job-boards.eu.greenhouse.io/neoris/jobs/4881884101)

Fetched page was a **job index**, not the full JD body. Search snippets for that URL still quote: React + backend; **GenAI-based workflows**; Java/Spring and/or Python; CI/CD; Kubernetes; GCP/Azure; **Practical experience with Generative AI and Agentic AI**. Treat as **NEORIS-branded agentic hiring**, but re-open the job page before citing bullet-level requirements.

**Production vs chat.** NEORIS language is the strongest “you already shipped LLM systems” bar in this set (years of **production-grade AI/LLM**, not POCs).

---

### 5. Accenture — Junior GenAI Engineer (EU English ATS; Poland locations)

| Field | Value |
| --- | --- |
| **Title** | Junior GenAI Engineer (AI&Data) |
| **URL** | [accenture.com … R00318994](https://www.accenture.com/us-en/careers/jobdetails?id=R00318994_en) |
| **Locations on page** | Warsaw, Krakow; remote mix with client/office |

**Repeated keywords.** GenAI; agentic AI; autonomous multi-agent systems; Python; OpenAI; Anthropic; Google; open-source models; **enterprise-grade RAG**; agentic workflows; hallucinations; production; vector databases; embeddings; Text-to-SQL; **MCP**; LangChain; LangGraph; LlamaIndex; ADK; agents with memory, tools, autonomous decision-making; **Cursor, Copilot**; LLMOps; Docker; FastAPI; Flask; **Responsible AI**; model evaluation.

**Responsibilities vs requirements.**

- **Do:** Build GenAI apps and multi-agent systems for enterprise clients; design RAG and agentic workflows; stress-test outputs before production; deploy to AWS/Azure/GCP.
- **Need:** Degree or equivalent; Python + basic SQL; REST/HTTP; hands-on foundation models; embeddings/vector search **understanding**; **familiarity** with agentic frameworks; **awareness** of MCP; **proficiency with AI-assisted tools (Cursor, Copilot) as core daily workflow**; English ≥ B2.
- **Bonus:** Built RAG/agentic workflows or vector DBs; multi-agent projects (including personal/academic); LLMOps; GitHub; cloud/Docker/FastAPI; Responsible AI.

**Production vs chat.** They **split** two skills: (1) **client GenAI products** (RAG, agents, evals, cloud); (2) **AI-assisted coding**. Interview note: debug a real problem **using your preferred AI-assisted setup**. That is **not** the same as having shipped LangGraph in production.

---

### 6. Accenture — Senior AI and Agentic Developer (Canada; English ATS)

| Field | Value |
| --- | --- |
| **Title** | Senior AI and Agentic Developer |
| **URL** | [accenture.com … R00339120](https://www.accenture.com/ca-en/careers/jobdetails?id=R00339120_en) |

**Repeated keywords.** Production-grade; LLM applications; agent orchestration; RAG; tool/function calling; **MCP/A2A**; LangGraph; Semantic Kernel; LangChain; **Pydantic**; AutoGen; CrewAI; guardrails; Responsible AI; human-in-the-loop; LLMOps; AgentOps; CI/CD; prompt and model lifecycle; cost controls; context engineering; memory; evaluations.

**Bar.** Min 3 years AI/ML/NLP; 3 years deploying AI/ML on a cloud; 2 years engineering (Python/JS/Java/Go) **and** mastery of an AI framework like LangGraph or Semantic Kernel; **1 year architecting LLM-driven and agentic applications**; production software engineering (APIs, testing, CI/CD, observability, secure coding).

**Production vs chat.** Explicit: move clients **from prototypes to measurable business outcomes**; evaluations for prompts, retrieval, agent behavior, security, latency, cost.

---

### 7. Accenture — Full Stack AI Developer / LLM consultant (Singapore posting; English ATS)

| Field | Value |
| --- | --- |
| **Title** | Full Stack AI Developer (page also labels AI LLM Technology Architecture Manager) |
| **URL** | [accenture.com … 14210587](https://www.accenture.com/us-en/careers/jobdetails?id=14210587_en&title=LLM+Full+Stack+Engineer+Manager) |

**Repeated keywords.** Production-grade agentic AI; MCP servers; knowledge pipelines; LangGraph; AutoGen; ReAct; Chain-of-Thought; Plan-and-Execute; few-shot; structured output schemas; A2A; hybrid retrieval; re-ranking; Text-to-SQL; Elasticsearch; knowledge graphs; AgentOps; token cost tracking; guardrails; PII redaction; **Claude Code, GitHub Copilot, Codex**.

**Bar.** 3+ years production full stack; 3+ years **building and deploying LLM-based applications** (prompt engineering, RAG, tools, or agents); cloud-native 2+ years.

**Production vs chat.** “Writing code, building agents, implementing MCP servers” **and separately** “proficiency with AI-assisted development tools.” Two columns.

---

### 8. Accenture — LLM Full Stack Engineer (Bengaluru)

| Field | Value |
| --- | --- |
| **Title** | LLM Full Stack Engineer |
| **URL** | [accenture.com … 14348288](https://www.accenture.com/us-en/careers/jobdetails?id=14348288_en) |

**Keywords.** Generative AI; LLMs; prompt engineering; fine-tuning; vector databases; embeddings; semantic search; RAG; latency and cost; **responsible AI**; production monitoring; LangChain; LlamaIndex; Pinecone; FAISS; Weaviate; nice-to-have **AI agents / autonomous workflows**; MLOps; copilots.

**Production vs chat.** “Monitor and improve model performance in production environments” + responsible AI. Agents are **nice-to-have**, not the core title.

---

### 9. Citi — Lead Generative AI Developer (New York; English ATS)

| Field | Value |
| --- | --- |
| **Title** | Lead Generative AI Developer |
| **URL** | [jobs.citi.com … 99123079296](https://jobs.citi.com/job/new-york/lead-generative-ai-developer/287/99123079296) |
| **Posted** | 12 Aug 2026 |

**Repeated keywords.** Generative AI; LLM; RAG; autonomous AI agents; prompt engineering; production-ready Python; FastAPI; Flask; fine-tuning; embeddings; MLOps; observability; governance; LangGraph; Google ADK; LangChain; LlamaIndex; few-shot; chain-of-thought; OpenAI; Azure OpenAI; Anthropic; AWS Bedrock; Vertex AI; Pinecone; Weaviate; pgvector; Chroma; Docker; Kubernetes; responsible AI; hallucination mitigation.

**Bar.** 10+ years SWE, **at least 2+ years focused on Generative AI / LLM application development**.

**Production vs chat.** “Operationalize” + AI Risk/Compliance + regulated industry. ChatGPT-as-a-user is nowhere in the JD.

**Note.** [Generative AI Engineer, AVP (Jacksonville)](https://jobs.citi.com/job/jacksonville/generative-ai-engineer-avp/287/94059778640) and [Lead Generative AI Engineer, VP (Irving)](https://jobs.citi.com/job/irving/lead-generative-ai-engineer-vp/287/99017404928) **returned Job Not Found** on 25 Aug 2026. Search indexes still quoted LangGraph, RAG, Vector DBs, Advanced Prompt Engineering, NeMo Guardrails / Llama Guard. Do not treat those two as live postings without a fresh fetch.

---

## Title vocabulary (what ads actually say)

| Resume-facing title | Who uses it in this sample |
| --- | --- |
| AI Prompt & Agent Engineer | Logicalis |
| AI Agent Engineer / Ingeniero de IA Agéntica | Cibernos |
| Software Engineer IA / Ingeniero IA Multiagente LangChain-RAG | Capitole |
| Senior AI Engineer (GenAI & Agentic Systems) | NEORIS (aggregator) |
| Junior / Senior GenAI Engineer; Full Stack AI Developer; LLM Full Stack Engineer; Senior AI and Agentic Developer | Accenture |
| Lead Generative AI Developer / Gen AI Engineer | Citi |
| RAG Engineer / LLM Engineer as a **standalone title** | **Not** the Spain postings above; those skills are **embedded** in Agent / GenAI / Software Engineer IA titles. US-style “RAG Engineer” appears more in SI/remote ads (e.g. EPAM-style “Agentic and RAG Systems” on aggregators) than in this Spain first-party set. |

---

## Industry names for practices (resume ↔ JD)

These practices are **common in agent-coding and RAG engineering**. JDs above **rarely** name Cursor worktrees or Obsidian. Use **JD phrases** on the CV; keep tool-specific names for interviews or a skills line if true.

### 1. One agent per feature, isolated Git worktrees (Cursor, Orca)

| Common names | Primary sources |
| --- | --- |
| **Git worktrees** | [git-scm.com/docs/git-worktree](https://git-scm.com/docs/git-worktree) — multiple working trees attached to one repository |
| **Cursor worktrees / parallel agents** | [cursor.com/docs/configuration/worktrees](https://cursor.com/docs/configuration/worktrees) — isolated checkouts so agents do not conflict; `/worktree`, `/best-of-n`, `/apply-worktree` |
| **Worktree-native / parallel agents** (Orca) | Product docs: [onorca.dev/docs/model/worktrees](https://www.onorca.dev/docs/model/worktrees) (quoted in search: every task gets its own `git worktree` so parallel agents do not share files) |

**JD overlap.** Almost none of the Spain GenAI JDs mention worktrees. Closest ATS phrases: **multi-agent**, **orchestration**, **isolated** is not used. Accenture Junior asks for **Cursor as a coding tool**, not worktrees.

**Do not write** “production multi-agent LangGraph” to mean “I ran Cursor agents in worktrees.”

### 2. Expensive models for planning; cheaper models for grunt work

| Common names | Primary sources |
| --- | --- |
| **Planners vs workhorses**; **agentic planning** vs **task execution** | [OpenAI Reasoning best practices](https://developers.openai.com/api/docs/guides/reasoning-best-practices) — o-series as “the planners”; GPT models as “the workhorses”; planner assigns a GPT “doer” per step |
| **Model routing**; **fallback routing**; **token, cost, and latency management** | Accenture AI Native / Full Stack JDs (search-quoted [R00341058](https://www.accenture.com/cn-en/careers/jobdetails?id=R00341058_en&title=AI+Native+Software+Engineering+Asso.+Manager); Full Stack [14210587](https://www.accenture.com/us-en/careers/jobdetails?id=14210587_en&title=LLM+Full+Stack+Engineer+Manager) “LLM gateway”, token cost tracking) |
| **LLM gateway** | Accenture Full Stack: “LLM gateway configuration” for cost-efficient agents |

**JD overlap.** Capitole/Logicalis say **optimizar** rendimiento; Accenture/Citi say **latency and cost**. They usually do **not** say “o-series planner.”

### 3. Obsidian as project knowledge base / “second brain” for agents

| Common names | Primary sources |
| --- | --- |
| **Second brain** (Tiago Forte methodology, popularized independently of LLMs) | Discussed as the human PKM layer in later “AI second brain” write-ups, e.g. [MindStudio on Claude Code + Obsidian](https://www.mindstudio.ai/blog/build-ai-second-brain-claude-code-obsidian) |
| **LLM wiki** | Same article attributes the markdown-wiki pattern to Andrej Karpathy (2026); **not** a job-title keyword |
| **Vault + CLAUDE.md / AGENTS.md as standing instructions** | Agent products load a root markdown constitution; Anthropic documents **Agent Skills** separately ([engineering post](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)) |

**JD overlap.** Zero of the fetched JDs mention Obsidian. Closest JD words: **knowledge pipelines**, **RAG**, **memory**, **context engineering**, **fuentes de conocimiento**.

### 4. Custom agents + skills.sh / Agent Skills

| Common names | Primary sources |
| --- | --- |
| **Agent Skills**; **SKILL.md** | [Anthropic: Equipping agents… with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills); [Claude Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview); open format [agentskills.io](https://agentskills.io) / [github.com/agentskills/agentskills](https://github.com/agentskills/agentskills) |
| **skills CLI** (`npx skills add`) | [skills.sh](https://www.skills.sh/agent/claude-code) (directory + install into the repo) |
| **Skills / MCP** in enterprise JDs | Accenture Full Stack: “Translate business processes into agent-executable **skills**”; “MCP servers”; versioned registries of agents, tools, **skills**, prompts |

**JD overlap.** Spain Cibernos lists **MCP** as a plus. Accenture Full Stack is the posting that says **skills** in the agent-product sense. Do not equate installing a Cursor skill with “enterprise AgentOps.”

### 5. Prompt techniques: zero-shot, few-shot, CoT, ReAct

| Name | Primary sources | JD hits |
| --- | --- | --- |
| **Zero-shot / one-shot / few-shot** | Brown et al. in-context learning is the usual academic root; Logicalis lists them **explicitly** | Logicalis; Citi Lead (few-shot); Accenture Full Stack (few-shot examples) |
| **Chain-of-thought (CoT)** | Wei et al., [arXiv:2201.11903](https://arxiv.org/abs/2201.11903) | Logicalis “chain‑of‑thought”; Citi Lead; Accenture Full Stack “Chain-of-Thought” |
| **ReAct** (reason + act) | Yao et al., [arXiv:2210.03629](https://arxiv.org/abs/2210.03629) | Logicalis; Accenture Full Stack “ReAct, Chain-of-Thought, Plan-and-Execute” |
| **Prompt engineering / prompt evaluation** | Used as the **job-family** phrase | Capitole, Cibernos, Citi, Accenture |

**Caveat from vendor docs.** OpenAI says reasoning models often **should not** be prompted to “think step by step” ([reasoning best practices](https://developers.openai.com/api/docs/guides/reasoning-best-practices)). JDs still list CoT as a **classic prompting skill**.

### 6. LangGraph, RAG, embeddings, hybrid search, RRF

| Name | Primary sources | JD hits |
| --- | --- | --- |
| **LangGraph** | [langchain.com/langgraph](https://www.langchain.com/langgraph) — orchestration, HITL, memory, streaming | Capitole, Cibernos, Accenture, Citi |
| **LangChain** | Same ecosystem | Same |
| **RAG / Retrieval-Augmented Generation** | Ubiquitous in JDs; Capitole blog [RAG explanation](https://www.capitole-consulting.com/blog/what-are-llms-and-what-are-their-limitations-2/) | All Spain + Accenture + Citi |
| **Embeddings / vector search / vector databases** | JDs name Pinecone, Weaviate, Chroma, FAISS, pgvector | All |
| **Hybrid search + re-ranking** | NEORIS aggregator JD; Accenture Full Stack “hybrid retrieval, re-ranking” | NEORIS (aggregator); Accenture Full Stack |
| **RRF / Reciprocal Rank Fusion** | LangChain `reciprocal_rank_fusion` / EnsembleRetriever: [LangChain reference](https://reference.langchain.com/python/langchain-postgres/v2/hybrid_search_config/reciprocal_rank_fusion) | **Not named** in the fetched JDs. Interview-level synonym for hybrid fusion, not an ATS must-have on these Spain ads |

### 7. Structured outputs, Pydantic, tool calling, MCP

| Name | Primary sources | JD hits |
| --- | --- | --- |
| **Structured Outputs** (schema-constrained model JSON) | [OpenAI Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs) — JSON Schema; Python SDK via **Pydantic** | Accenture Senior lists **Pydantic** next to LangGraph; Accenture Full Stack “structured output schemas” |
| **Function calling / tool calling** | Provider APIs; Cibernos uses both ES/EN names | Cibernos; Accenture Senior; Logicalis (APIs as tools in the architecture sense) |
| **MCP (Model Context Protocol)** | [modelcontextprotocol.io tools spec](https://modelcontextprotocol.io/specification/2025-06-18/server/tools.md) — tools, `inputSchema` / `outputSchema`; spec notes MCP structuredContent ≠ LLM Structured Outputs | Cibernos plus; Accenture Junior/Senior/Full Stack |

### 8. Responsible AI, prompt injection, guardrails

| Name | Primary sources | JD hits |
| --- | --- | --- |
| **Responsible AI** | Logicalis; Accenture; Citi | Logicalis; Accenture LLM Full Stack; Citi |
| **Guardrails** | Capitole requirements; Citi VP snippets (NeMo Guardrails, Llama Guard) | Capitole; NEORIS aggregator; Accenture |
| **Prompt injection** | [OWASP LLM Top 10 — LLM01 Prompt Injection](https://owasp.org/www-project-top-10-for-large-language-model-applications/); current programme [genai.owasp.org](https://genai.owasp.org/llm-top-10/) | **Not named** in Logicalis/Capitole/Cibernos bodies fetched. Use **Responsible AI**, **guardrails**, **seguridad**, **PII** on Spanish CVs unless the JD says prompt injection |
| **EU AI / normativa europea de IA** | Logicalis | Logicalis only in this Spain set |
| **Human-in-the-loop** | Accenture Senior; LangGraph marketing | Accenture Senior |

---

## Honesty vs this candidate

Snapshot of `react-resume.json` **when this research started** (backend-first, thin Applied AI line). The same session later updated headline, summary, Generative AI skills, and ReckonFlow bullets to match the ATS phrases below — still without inventing vector DBs, MCP servers, or client AgentOps.

- ReckonFlow (code): FastAPI travel API; **LLM receipt extraction**; **hybrid bank reconciliation**; Pydantic schema guardrails; embeddings + lexical match + RRF in matching. Not a LangGraph/MCP product.
- Skills now named on the CV (verify you can demo each): Generative AI, NLP, LLMs, prompt engineering, RAG (as hybrid/RAG-style matching, not Pinecone), embeddings, LangGraph (only if you have a graph), structured outputs, guardrails, LLM routing, context engineering.

**Safe to claim if true in the repo (verify before pasting).** Structured extraction; Pydantic schemas; embeddings; hybrid retrieval including RRF if the code does it; FastAPI; deploy of **your** API (Render). That is **applied LLM features in an app you own**, closer to Accenture’s “LLM-based applications” **entry/bonus** bar than to Capitole’s 3–6 years LangGraph ITOps or Citi’s 2+ years GenAI **plus** 10 years SWE.

**Unsafe without evidence.** Production multi-agent LangGraph; AgentOps/LLMOps platforms; MCP servers for enterprise systems; prompt injection red-teaming as a job; “AI Agent Engineer” as a past **job title**; years of client GenAI delivery.

**Cursor / worktrees / Obsidian / skills.** Those are **AI-assisted engineering practices**. Accenture Junior **wants** Cursor. They do **not** replace “diseñar arquitecturas agénticas y RAG para ITOps.”

---

## Top 20 ATS phrases (copy these forms)

Ranked by how often they appear **verbatim** across the Spain + Accenture + Citi set. Prefer exact JD language on tailored CVs.

1. **RAG** / **Retrieval-Augmented Generation** / **sistemas RAG** / **arquitecturas RAG**
2. **LangChain**
3. **LangGraph**
4. **Prompt engineering** / **diseño de prompts** / **estrategias de prompting**
5. **Embeddings**
6. **Vector databases** / **motores vectoriales** / **bases de datos vectoriales**
7. **Multi-agent** / **sistemas multiagente** / **arquitecturas agénticas**
8. **LLMs** / **Large Language Models** / **modelos de lenguaje**
9. **Python**
10. **Tool calling** / **Function Calling** / **Tool Calling**
11. **Orchestration** / **orquestación** / **workflows agénticos**
12. **OpenAI** / **Azure OpenAI** / **AWS Bedrock** / **Google Vertex AI** (pick the ones in the JD)
13. **Guardrails** / **Responsible AI** / **IA responsable**
14. **Chunking**
15. **Observability** / **evaluación** / **prompt evaluation** / **benchmarks**
16. **REST APIs** / **microservicios** / **FastAPI** (when the JD is backend-heavy)
17. **MCP** / **Model Context Protocol**
18. **Hybrid search** / **re-ranking** / **pipelines de retrieval** (stronger on NEORIS/Accenture than Logicalis)
19. **LLMOps** / **AgentOps** / **CI/CD** (Accenture/Citi; rare on Logicalis)
20. **Zero-shot / few-shot / chain-of-thought / ReAct** (Logicalis + Citi + Accenture Full Stack; use if the JD lists them)

**Spanish extras that repeat:** *más allá del chat*; *toma de decisiones autónomas*; *contextualización*; *despliegue de soluciones productivas*; *normativa europea de IA*.

---

## Source log

| Source | Role |
| --- | --- |
| https://careers.es.logicalis.com/jobs/7916800-ai-prompt-agent-engineer | First-party JD (full) |
| https://www.jobijoba.es/oferta-empleo/69/21d44897bb7493751ed60e5e36b4948d | Capitole JD reprint |
| https://www.jobleads.com/es/job/software-engineer-ia--madrid--e968bcfee142231245adacd9f37e3a91b | Capitole reprint + salary band on aggregator |
| https://es.joblum.com/job/ingeniero-de-ia-agentica-ai-agent-engineer/2547771 | Cibernos named + JD |
| https://www.infojobs.net/madrid/ingeniero-ia-agentica-ai-agent-engineer/of-ic7b5e39e0a42c288aa57db6d6ddc6a | Same Cibernos-style JD |
| https://job-boards.eu.greenhouse.io/neoris/jobs/4881884101 | NEORIS careers (index on fetch) |
| https://co.sercanto.com/detail/a/senior-ai-engineer-genai-agentic-systems_bogota_42252265 | NEORIS Senior AI Engineer reprint |
| Accenture R00318994, R00339120, 14210587, 14348288 | First-party English JDs |
| https://jobs.citi.com/job/new-york/lead-generative-ai-developer/287/99123079296 | First-party English JD |
| Vendor/spec links in the mapping section | Industry names, not job ads |

**Gaps.** Capitole careers site did not surface this JD in search; used aggregators that quote the full Spanish body. Citi Jacksonville/Irving URLs 404. Accenture “AI Native Software Engineering” (R00341058) timed out; only search snippets used. Orca worktree page was not fetched in this session; cite the official URL and Cursor/Git docs for isolation semantics.
