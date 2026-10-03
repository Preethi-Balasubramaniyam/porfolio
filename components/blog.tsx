import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import ScreenshotGallery from "./common/ScreenshotGallery";
import styles from "../styles/projects.module.css";

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

const Blog = () => {
  return (
        <motion.article
          className={styles.caseStudy}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
  );
};

export default Blog;
