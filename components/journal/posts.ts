export type Point = { title: string; body?: string; bullets?: string[] };

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "points"; items: Point[] };

export type Post = {
  slug: string;
  title: string;
  date: string;
  kicker: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  blocks: Block[];
};

export const posts: Post[] = [
  {
    slug: "coding-with-ai",
    title: "Coding With AI: How to Pair Program With a Machine",
    date: "October 3, 2026",
    kicker: "Essay",
    image: "/blog/pair-program-with-ai.png",
    imageAlt: "Two code windows, labeled you and ai assistant, joined by a review check. The caption reads: Pair program with AI. Treat AI as a fast but fallible junior colleague.",
    excerpt: "Working with an AI coding assistant is like pairing with a teammate who never sleeps, and is sometimes confidently wrong.",
    blocks: [
      { type: "p", text: "Picture a teammate who never sleeps, has read millions of code samples, and answers instantly. The catch is that it is sometimes confidently wrong. That is what working with an AI coding assistant is like." },
      { type: "h2", text: "What AI does well" },
      { type: "list", items: [
        "Drafting boilerplate and repetitive code",
        "Explaining unfamiliar functions or legacy code",
        "Suggesting test cases you hadn't thought of",
        "Translating code between languages",
      ] },
      { type: "h2", text: "What it does poorly" },
      { type: "list", items: [
        "Understanding your business context",
        "Making architectural trade-offs",
        "Noticing that a solution is subtly insecure or inefficient",
        "Admitting when it doesn't know",
      ] },
      { type: "h2", text: "Habits of engineers who use it well" },
      { type: "points", items: [
        { title: "Give context, not just commands", body: "\"Write a login function\" gets generic output. \"Write a login function for a Node.js app using JWT, with rate limiting, following this folder structure\" gets something useful." },
        { title: "Work in small steps", body: "Ask for one function at a time. Small pieces are easier to review than a 500-line dump." },
        { title: "Review everything", body: "Read generated code as if a stranger submitted a pull request." },
        { title: "Ask it to explain itself", body: "If you can't explain why the code works, you shouldn't ship it." },
        { title: "Keep your own skills sharp", body: "Try solving some problems unaided each week, the way a pilot keeps flying manually even with autopilot." },
      ] },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "The goal is not to type less. It is to think better. Engineers who treat AI as a fast but fallible junior colleague will ship more without lowering quality." },
    ],
  },
  {
    slug: "security-is-everyones-job",
    title: "Security Is Everyone's Job Now",
    date: "September 26, 2026",
    kicker: "Essay",
    image: "/blog/security-is-everyones-job.png",
    imageAlt: "A lock on a shield, linked to validate input, protect secrets, scan dependencies, least privilege, and know common attacks. The caption reads: Security is everyone's job.",
    excerpt: "As AI speeds up development, security stops being a specialist's concern and becomes a basic engineering skill.",
    blocks: [
      { type: "p", text: "When code gets written faster, vulnerabilities can spread faster too. As AI speeds up development, security stops being a specialist's concern and becomes a basic engineering skill." },
      { type: "h2", text: "Why the risk is growing" },
      { type: "list", items: [
        "More code is produced, so more code goes unreviewed",
        "Generated code may use outdated or insecure patterns",
        "Applications rely on hundreds of third-party packages",
        "Attackers also use AI to find weaknesses faster",
      ] },
      { type: "h2", text: "Five security habits every developer should build" },
      { type: "points", items: [
        { title: "Never trust input", body: "Validate and sanitize everything from users, APIs, and files." },
        { title: "Protect secrets", body: "API keys and passwords belong in environment variables or a secrets manager, never in the repository." },
        { title: "Know your dependencies", body: "Use tools that scan packages for known vulnerabilities, and update regularly." },
        { title: "Apply least privilege", body: "Give every service and user only the access it needs." },
        { title: "Learn the common attacks", body: "Study injection, broken authentication, and cross-site scripting. The OWASP Top 10 is a good start." },
      ] },
      { type: "h2", text: "A new risk: AI inside your product" },
      { type: "p", text: "If your app uses a language model, you face new problems such as prompt injection, data leakage, and unreliable outputs. Treat model responses as untrusted input, just like anything else from outside your system." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Engineers who can build secure software will always be in demand. Security knowledge is one of the best ways to make yourself hard to replace." },
    ],
  },
  {
    slug: "from-devops-to-platform-engineering",
    title: "From DevOps to Platform Engineering: Where Infrastructure Is Heading",
    date: "September 19, 2026",
    kicker: "Essay",
    image: "/blog/devops-to-platforms.png",
    imageAlt: "Three layers: developers ship features, an internal platform, and cloud infrastructure. The caption reads: From DevOps to platforms. Know how your code reaches real users.",
    excerpt: "A platform team builds an internal toolkit so product developers can deploy and scale without mastering every piece of the cloud.",
    blocks: [
      { type: "p", text: "Not long ago, developers wrote code and handed it to an operations team. Then DevOps merged the two. Now a third shift is underway: platform engineering." },
      { type: "h2", text: "The problem" },
      { type: "p", text: "Modern cloud setups are complicated, with containers, Kubernetes, pipelines, monitoring, and cloud services. Expecting every developer to master all of it leads to burnout and inconsistency." },
      { type: "h2", text: "The idea behind platform engineering" },
      { type: "p", text: "A platform team builds an internal toolkit, sometimes called an internal developer platform, so product developers can deploy, monitor, and scale applications with simple, standardized steps. Developers focus on features, and the platform handles the plumbing." },
      { type: "h2", text: "Trends to watch" },
      { type: "points", items: [
        { title: "Infrastructure as code", body: "Servers defined in files, versioned like software." },
        { title: "Serverless and managed services", body: "Less hardware to maintain." },
        { title: "Observability", body: "Understanding system behavior through logs, metrics, and traces." },
        { title: "Cost awareness", body: "Engineers increasingly own cloud spending, a practice often called FinOps." },
        { title: "Automation with AI", body: "Assistants that diagnose incidents and suggest fixes." },
      ] },
      { type: "h2", text: "How to prepare" },
      { type: "p", text: "Learn Linux basics, containers (Docker), one major cloud provider, a CI/CD pipeline, and an infrastructure-as-code tool. You don't need to master everything. Understand how your code actually reaches users and what happens when it breaks." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Writing great code is only half the job. Engineers who understand how software runs in the real world are the ones teams trust with important systems." },
    ],
  },
  {
    slug: "low-code-and-no-code",
    title: "Low-Code and No-Code: Threat or Opportunity for Developers?",
    date: "September 12, 2026",
    kicker: "Essay",
    image: "/blog/low-code.png",
    imageAlt: "Low-code blocks on one side and custom code on the other, with a developer standing on the bridge between them.",
    excerpt: "Low-code will not replace developers, but it will take the simplest work and leave the harder problems.",
    blocks: [
      { type: "p", text: "Business teams can now build forms, dashboards, and workflows by dragging and dropping, without writing a line of code. Some developers worry this signals the end of their jobs. The reality is more interesting." },
      { type: "h2", text: "Why these tools are growing" },
      { type: "p", text: "Companies have more software requests than developers to fulfil them. Low-code tools let non-technical staff solve small problems themselves, which clears the backlog." },
      { type: "h2", text: "Where they fall short" },
      { type: "list", items: [
        "Limited flexibility for complex logic",
        "Performance problems at scale",
        "Vendor lock-in",
        "Security and compliance gaps",
        "A messy \"shadow IT\" sprawl when nobody oversees what's built",
      ] },
      { type: "h2", text: "Where developers come in" },
      { type: "p", text: "Someone must connect these tools to real systems, build custom components, enforce security, and rescue projects that outgrow the platform. Developers who understand both worlds become valuable bridges." },
      { type: "h2", text: "Opportunities for engineers" },
      { type: "list", items: [
        "Build reusable components and integrations that non-developers can plug in",
        "Advise on when a tool is enough and when custom code is needed",
        "Specialize in migrating outgrown low-code apps to proper architectures",
        "Use low-code yourself for quick prototypes",
      ] },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Low-code won't replace developers, but it will take away the simplest work. The future belongs to engineers who tackle harder problems and guide others in building responsibly." },
    ],
  },
  {
    slug: "future-proof-your-career",
    title: "Future-Proof Your Career: Skills Beyond Code",
    date: "September 5, 2026",
    kicker: "Essay",
    image: "/blog/future-proof-beyond-code.png",
    imageAlt: "A path over a mountain marked learn, write, business, and network. The caption reads: Future-proof beyond code. Curiosity, clear writing and judgment outlast any tool.",
    excerpt: "As coding gets easier to automate, curiosity, clear writing, and judgment become the advantages that last.",
    blocks: [
      { type: "p", text: "Technology changes every few years, but some career advantages last. As coding gets easier to automate, the human side of engineering gets more valuable." },
      { type: "points", items: [
        { title: "1. Learn how to learn", body: "Frameworks come and go. The engineer who can pick up a new language or tool in a weekend outlasts the one who mastered a single stack. Build a routine: a small project, a short course, or a few articles each week." },
        { title: "2. Write clearly", body: "Design documents, pull request descriptions, and emails shape how people see you. Clear writing saves teams hours and builds your reputation, especially in remote and global teams." },
        { title: "3. Understand the business", body: "Ask why a feature matters, who uses it, and how it earns or saves money. Engineers who connect code to outcomes get trusted with bigger decisions." },
        { title: "4. Build a visible portfolio", bullets: [
          "Share projects on GitHub with clear READMEs",
          "Write short posts about problems you solved",
          "Contribute to open source, even by fixing documentation",
          "Speak at meetups or record a short talk",
        ] },
        { title: "5. Grow your network", body: "Many opportunities come through people. Help others, ask questions, and stay in touch with former colleagues." },
        { title: "6. Protect your energy", body: "Constant change can cause burnout. Pick a few things to learn deeply rather than chasing every trend, and rest properly." },
      ] },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Your career is a long game. Tools will keep changing, but curiosity, communication, and good judgment will keep you valuable throughout." },
    ],
  },
  {
    slug: "future-of-the-software-engineer",
    title: "The Future of the Software Engineer: What's Coming and How to Adapt",
    date: "August 29, 2026",
    kicker: "Essay",
    image: "/blog/software-engineer-of-tomorrow.png",
    imageAlt: "A code window linked to a small network of nodes. The caption reads: The software engineer of tomorrow. Human judgment, amplified by AI.",
    excerpt: "Software engineering is not disappearing. It is changing shape. The engineers who understand how, and adapt early, will have an advantage.",
    blocks: [
      { type: "p", text: "A few years ago, \"learn to code\" was the standard advice for a stable, well-paid career. Today, AI tools write functions, generate tests, and explain unfamiliar codebases in seconds. So where does that leave software engineers?" },
      { type: "p", text: "Software engineering is not disappearing. It is changing shape. The engineers who understand how, and adapt early, will have an advantage." },
      { type: "h2", text: "How the role is changing" },
      { type: "points", items: [
        { title: "From writing code to directing it", body: "Much of the routine work, such as boilerplate, CRUD endpoints, and simple scripts, is increasingly handled by AI assistants. The engineer's value moves toward deciding what should be built, reviewing what was generated, and catching what's subtly wrong." },
        { title: "From coder to problem solver", body: "Writing syntax matters less than understanding the problem. Why does the user need this? What are the trade-offs? What happens when it fails at scale? These questions still need a human who understands the context." },
        { title: "From solo work to systems thinking", body: "Modern software is a web of services, data pipelines, APIs, and models. Engineers who can see the whole system and its failure points will be in demand." },
        { title: "Smaller teams, bigger output", body: "With AI handling repetitive work, a small team can ship what once took a large one. That raises expectations for each person's breadth." },
      ] },
      { type: "h2", text: "Skills that will matter more" },
      { type: "points", items: [
        { title: "System design and architecture", body: "AI can write a component, but deciding how components fit together is still a human skill." },
        { title: "Code review and debugging", body: "Reading code critically becomes as important as writing it. Generated code can look right and still be wrong." },
        { title: "Security and reliability", body: "As more code is produced faster, more bugs and vulnerabilities slip in. Engineers who can spot them are valuable." },
        { title: "Domain knowledge", body: "Knowing healthcare, finance, logistics, or education well makes you far harder to replace than knowing a framework." },
        { title: "Communication", body: "Translating between business needs and technical solutions, and explaining decisions clearly, is a lasting advantage." },
        { title: "AI literacy", body: "Know how to prompt well, how to evaluate model output, and how to build products on top of AI." },
      ] },
      { type: "h2", text: "How to adapt: a practical plan" },
      { type: "points", items: [
        { title: "Use AI tools daily, but stay in charge", body: "Let assistants draft code, then review every line as if a new teammate wrote it. Treat it as a collaborator, not an oracle." },
        { title: "Strengthen your fundamentals", body: "Data structures, networking, databases, and operating systems are what let you judge whether AI output is good. Weak fundamentals plus AI means confident mistakes." },
        { title: "Build things end to end", body: "Ship small projects covering design, code, deployment, and monitoring. Breadth is more valuable when tools handle the details." },
        { title: "Pick a niche", body: "Combine engineering with a domain, such as fintech, healthtech, or climate. Specialists with context are harder to automate." },
        { title: "Learn continuously, in small doses", body: "Set aside a few hours each week for new tools or concepts. Don't chase every trend. Learn what you can apply." },
        { title: "Develop human skills", body: "Mentoring, negotiation, and leading discussions will set you apart in a world where code is cheap." },
      ] },
      { type: "h2", text: "Looking ahead" },
      { type: "p", text: "The tools will keep improving, and some tasks will vanish. But software exists to solve human problems, and that needs people who understand those problems, make sound judgments, and take responsibility for the result. The engineers who thrive won't be the ones who type the fastest. They'll be the ones who think clearly, learn quickly, and use AI to do more of what matters." },
      { type: "p", text: "The future of software engineering isn't human versus machine. It's engineers who work well with machines versus those who don't. Start adapting today." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
