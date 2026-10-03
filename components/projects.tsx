import { motion } from "framer-motion";
import ScreenshotGallery from "./common/ScreenshotGallery";
import Blog from "./blog";
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
            Two builds I can show: WorkFlow AI, a workspace where AI only reads metrics the API already computed, and AI Blog Assistant, a writing studio where Gemini drafts the piece.
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

        <Blog />
      </div>
    </section>
  );
};

export default Projects;
