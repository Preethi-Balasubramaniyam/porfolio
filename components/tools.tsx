import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt,
  FaJs
} from 'react-icons/fa';
import { 
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFlutter
} from 'react-icons/si';
import styles from '../styles/tools.module.css';

const tools = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" }
];

export default function Tools() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <p className={styles.subtitle}>
          Looking to contribute to a <span className={styles.highlight}>cross-functional</span> team that prioritizes accessibility and designs solutions that positively impact people&apos;s lives.
        </p>
      </div>

      {/* Tech Constellation */}
      <div className={styles.constellation}>
        {/* Central Hub */}
        <div className={styles.centralHub}>
          <div className={styles.hubContent}>
            <span className={styles.hubIcon}>PB</span>
          </div>
        </div>

        {/* Tech Icons arranged around the hub */}
        <div className={styles.techOrbit}>
          {tools.map((tool, index) => {
            const angle = (index * 360 / tools.length) * (Math.PI / 180);
            const radius = 200;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div
                key={tool.name}
                className={styles.techIcon}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  color: tool.color
                }}
              >
                <tool.icon />
                <span className={styles.toolName}>{tool.name}</span>
              </div>
            );
          })}
        </div>

        {/* Connection Lines */}
        <svg className={styles.connectionSvg} viewBox="0 0 800 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          {tools.map((_, index) => {
            const angle = (index * 360 / tools.length) * (Math.PI / 180);
            const radius = 200;
            const x = Math.cos(angle) * radius + 400;
            const y = Math.sin(angle) * radius + 400;
            
            return (
              <line
                key={index}
                x1={400}
                y1={400}
                x2={x}
                y2={y}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="4,4"
                opacity="0.6"
              />
            );
          })}
        </svg>

        {/* Orbital Ring */}
        {/* <div className={styles.orbitalRing} /> */}
      </div>
    </div>
  );
}