import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../styles/projects.module.css";

const workflowShots = [
  { src: "/projects/workflow/01-landing.png", label: "Landing" },
  { src: "/projects/workflow/02-login.png", label: "Sign in" },
  { src: "/projects/workflow/03-dashboard.png", label: "Dashboard" },
  { src: "/projects/workflow/04-projects.png", label: "Projects" },
  { src: "/projects/workflow/05-project.png", label: "Project and tasks" },
  { src: "/projects/workflow/06-documents.png", label: "Documents" },
  { src: "/projects/workflow/07-analytics.png", label: "Analytics" },
  { src: "/projects/workflow/08-team.png", label: "Team" },
  { src: "/projects/workflow/09-activity.png", label: "Activity" },
  { src: "/projects/workflow/10-ai-assistant.png", label: "AI assistant" },
];

const workflowStack = [
  { layer: "Web", choice: "Next.js, React, TypeScript, Tailwind CSS" },
  { layer: "API", choice: "Express, Zod, JWT in an HTTP-only cookie" },
  { layer: "Data", choice: "PostgreSQL, Prisma, pgvector for document embeddings" },
  { layer: "Realtime", choice: "Socket.IO, authorized per organization and project room" },
  { layer: "Files", choice: "Private Supabase Storage bucket" },
  { layer: "AI", choice: "Gemini through one provider interface, with a mock used in tests" },
];

const workflowSections = [
  {
    title: "One organization",
    body: "Each workspace is a single company. Sign-in uses an HTTP-only cookie. Owners, admins, and managers see the organization’s projects. Employees see only the projects they were added to.",
  },
  {
    title: "Tasks",
    body: "Work moves through to do, in progress, in review, blocked, and completed. Each task has an assignee, a due date, and comments. Suggested tasks from a written objective stay unpublished until someone creates them.",
  },
  {
    title: "Private files",
    body: "Uploads are PDF, Office, CSV, text, and common images, up to 25 MB. Text can be summarized and cited. There is no OCR, and nothing is indexed until someone asks.",
  },
  {
    title: "Health from data",
    body: "The API computes totals, completion, overdue and due-soon counts, charts, a 14-day trend, and the reason for the health label. A risk reading is a separate request. It does not run because the page opened.",
  },
  {
    title: "Team record",
    body: "Members and roles live on one list. The activity feed stores project, task, comment, and membership events for that organization only.",
  },
  {
    title: "Assistant",
    body: "Questions such as what is at risk, what is overdue, and who has the highest workload are answered from metrics the caller is allowed to see. The screen says the reply is an interpretation of those metrics.",
  },
];

const workflowProofs = [
  { title: "Access", text: "HTTP-only JWT. Employees only see projects they belong to." },
  { title: "Realtime", text: "Socket.IO rooms authorized per organization and project." },
  { title: "Documents", text: "Private storage. Text is indexed only when someone asks." },
  { title: "AI", text: "The model receives metrics the API already computed." },
];

const workflowLimits = [
  "No scanned-PDF OCR.",
  "No chat history and no multi-document assistant.",
  "Documents are indexed only when someone asks.",
  "The free hosted API can sleep, and the public web deployment is not the source of these screenshots.",
  "Demo sign-in shown here is the local Acme seed. It is not a production account.",
];

const blogShots = [
  { src: "/projects/aiblog/01-home.png", label: "Landing" },
  { src: "/projects/aiblog/02-login.png", label: "Sign in" },
  { src: "/projects/aiblog/03-dashboard.png", label: "Dashboard" },
  { src: "/projects/aiblog/04-signup.png", label: "Sign up" },
  { src: "/projects/aiblog/05-api-health.png", label: "API health" },
  { src: "/projects/aiblog/06-posts.png", label: "Post library" },
  { src: "/projects/aiblog/07-create-post.png", label: "New post" },
  { src: "/projects/aiblog/08-ai-tools.png", label: "AI tools" },
  { src: "/projects/aiblog/09-title-generator.png", label: "Title generator" },
  { src: "/projects/aiblog/10-outline-generator.png", label: "Outline generator" },
  { src: "/projects/aiblog/11-draft-generator.png", label: "Draft generator" },
  { src: "/projects/aiblog/12-semantic-search.png", label: "Semantic search" },
];

const blogStack = [
  { layer: "Web", choice: "Next.js 15, React 19, TypeScript, Tailwind CSS" },
  { layer: "API", choice: "Node.js, Express, TypeScript" },
  { layer: "Data", choice: "MongoDB for users, posts, and embeddings" },
  { layer: "Auth", choice: "Hashed passwords, JWT, author and admin roles" },
  { layer: "AI", choice: "Gemini Flash when GOOGLE_AI_API_KEY is set; built-in text if that call fails" },
  { layer: "Search", choice: "Published posts chunked and ranked with a local similarity index" },
];

const blogSections = [
  {
    title: "Accounts",
    body: "Sign up and sign in with email and password. Passwords are hashed. The API issues a JWT, and the dashboard sends that token on later requests.",
  },
  {
    title: "Post library",
    body: "A post is a title, a lowercase slug, and the article body. It starts as a draft. Publishing sets a date and puts the post on the public list.",
  },
  {
    title: "Author and admin",
    body: "An author manages their own posts. An admin can update or publish a post they do not own.",
  },
  {
    title: "Gemini writing tools",
    body: "A topic or title returns suggestions, a numbered outline, a sectioned draft, or a free-form edit. The API uses Gemini Flash. If that call fails, the same screens return built-in text.",
  },
  {
    title: "Semantic search",
    body: "Published posts are split into chunks and stored with a similarity vector. A natural-language query is ranked against that index and shown with a relevance score.",
  },
  {
    title: "API health",
    body: "The health page checks that the backend is reachable and lists auth, posts, generation, and search routes.",
  },
];

const blogProofs = [
  { title: "Accounts", text: "JWT after sign-in. Authors own their posts. Admins can publish posts they do not own." },
  { title: "Library", text: "Title, slug, and body. A draft stays off the public list until it is published." },
  { title: "Gemini", text: "Gemini Flash writes titles, outlines, drafts, and a free-form edit. A failed call still returns built-in text." },
  { title: "Search", text: "Published posts are chunked and ranked by similarity, with a score on each result." },
];

const blogLimits = [
  "If the Gemini call fails, titles, outlines, and drafts fall back to built-in suggestions.",
  "Search uses a local similarity index. It does not need a separate embedding key.",
  "Search covers published posts. Drafts stay off the public list.",
  "The seed script skips posts that already exist.",
  "Demo sign-in shown here is the local Maya Chen author account. It is not a production account.",
  "An author cannot edit another author's post. An admin can.",
];

type Shot = { src: string; label: string };

const ScreenshotGallery = ({ shots, product }: { shots: Shot[]; product: string }) => {
  const [index, setIndex] = useState(0);
  const shot = shots[index];

  const show = (next: number) => {
    const count = shots.length;
    setIndex((next + count) % count);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.stage}>
        <div className={styles.laptop}>
          <div className={styles.bezel}>
            <div className={styles.galleryFrame}>
              <Image
                src={shot.src}
                alt={`${product} — ${shot.label}`}
                width={1024}
                height={640}
                className={styles.galleryImg}
                priority={index === 0}
              />
              <button type="button" className={styles.carouselBtn} onClick={() => show(index - 1)} style={{ left: "12px" }} aria-label="Previous screenshot">
                <FaChevronLeft />
              </button>
              <button type="button" className={styles.carouselBtn} onClick={() => show(index + 1)} style={{ right: "12px" }} aria-label="Next screenshot">
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div className={styles.laptopBase} />
        </div>
      </div>
      <p className={styles.caption}>
        <span>{shot.label}</span>
        <span className={styles.captionCount}>
          {index + 1} / {shots.length}
        </span>
      </p>
      <div className={styles.thumbs}>
        {shots.map((item, i) => (
          <button
            type="button"
            key={item.src}
            className={`${styles.thumb} ${i === index ? styles.thumbActive : ""}`}
            onClick={() => setIndex(i)}
            aria-label={item.label}
          >
            <Image src={item.src} alt="" width={160} height={100} className={styles.thumbImg} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.heading}>Featured Projects</h1>
          <p className={styles.subheading}>
            Two builds I can show: WorkFlow AI, a workspace where AI only reads metrics the API already computed, and AI Blog Assistant (Quill), a writing studio where Gemini drafts the piece and search finds published posts by meaning.
          </p>
        </motion.div>

        <motion.article
          className={styles.caseStudy}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.caseHeader}>
            <div>
              <span className={styles.category}>Full Stack Project</span>
              <h2 className={styles.projectTitle}>WorkFlow AI</h2>
              <p className={styles.projectDescription}>
                A workspace for one company: projects, tasks, private files, and an assistant that explains numbers the server already calculated.
              </p>
            </div>
            <p className={styles.screenshotNote}>
              Captured locally while signed in as the owner of the Acme Technologies demo. The numbers on screen come from task data, not from the model.
            </p>
          </div>

          <div className={styles.proofRow}>
            {workflowProofs.map((item) => (
              <div key={item.title} className={styles.proofCard} data-depth>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <ScreenshotGallery shots={workflowShots} product="WorkFlow AI" />

          <div className={styles.techStack}>
            {["Next.js", "Express", "PostgreSQL", "Prisma", "Socket.IO", "Supabase", "Gemini"].map((tech) => (
              <span key={tech} className={styles.techBadge}>{tech}</span>
            ))}
          </div>

          <div className={styles.sectionGrid}>
            {workflowSections.map((section) => (
              <div key={section.title} className={styles.sectionCard} data-depth>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.stackBlock}>
            <h3>Stack</h3>
            <div className={styles.stackTable}>
              {workflowStack.map((row) => (
                <div key={row.layer} className={styles.stackRow}>
                  <span>{row.layer}</span>
                  <span>{row.choice}</span>
                </div>
              ))}
            </div>
            <p className={styles.fit}>
              The browser uses REST and a websocket. Prisma is the only database client. File bytes stay in private storage. Search uses pgvector when it is available, and a capped JSON similarity path when it is not. Production refuses a mock AI provider and mock storage, so a missing key cannot look like a real answer.
            </p>
          </div>

          <div className={styles.limits}>
            <h3>Limits</h3>
            <ul>
              {workflowLimits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.article>

        <motion.article
          className={styles.caseStudy}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={styles.caseHeader}>
            <div>
              <span className={styles.category}>Full Stack Project</span>
              <h2 className={styles.projectTitle}>AI Blog Assistant</h2>
              <p className={styles.projectDescription}>
                The studio is called Quill: warm paper, a forest-green rail, and copper actions. Authors sign in, keep drafts private, and publish when a piece is ready. Gemini Flash writes titles, outlines, and first drafts. Published posts can be searched by meaning.
              </p>
            </div>
            <p className={styles.screenshotNote}>
              Captured locally in Quill, signed in as Maya Chen on the sample seed. The desk shows Gemini Flash, four published posts, and two drafts. A search for “semantic search embeddings” ranks A Practical Guide to Semantic Search first.
            </p>
          </div>

          <div className={styles.proofRow}>
            {blogProofs.map((item) => (
              <div key={item.title} className={styles.proofCard} data-depth>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <ScreenshotGallery shots={blogShots} product="Quill" />

          <div className={styles.techStack}>
            {["Next.js", "React", "TypeScript", "Express", "MongoDB", "JWT", "Gemini Flash"].map((tech) => (
              <span key={tech} className={styles.techBadge}>{tech}</span>
            ))}
          </div>

          <div className={styles.projectLinks}>
            <a
              href="https://github.com/Preethi-Balasubramaniyam/AI-Blog-Platform"
              className={`${styles.projectLink} ${styles.primaryLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> View Code
            </a>
          </div>

          <div className={styles.sectionGrid}>
            {blogSections.map((section) => (
              <div key={section.title} className={styles.sectionCard} data-depth>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.stackBlock}>
            <h3>Stack</h3>
            <div className={styles.stackTable}>
              {blogStack.map((row) => (
                <div key={row.layer} className={styles.stackRow}>
                  <span>{row.layer}</span>
                  <span>{row.choice}</span>
                </div>
              ))}
            </div>
            <p className={styles.fit}>
              Quill calls the Express API with REST and a JWT. Users, posts, and embeddings live in MongoDB. Gemini Flash answers title, outline, draft, and free-form edits when GOOGLE_AI_API_KEY is set. If that call fails, the same screens return built-in text. Search ranks published chunks with a local similarity index, so the library can be queried without a separate embedding key.
            </p>
          </div>

          <div className={styles.limits}>
            <h3>Limits</h3>
            <ul>
              {blogLimits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Projects;
