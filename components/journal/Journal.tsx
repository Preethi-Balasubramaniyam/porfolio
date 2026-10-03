import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { posts } from "./posts";
import styles from "../../styles/journal.module.css";

const Journal = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.heading}>Blog</h1>
          <p className={styles.subheading}>
            Notes on building software while the tools keep changing.
          </p>
        </motion.div>

        <div className={styles.list}>
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
              <div className={styles.cardMedia}>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={960}
                  height={540}
                  className={styles.cardImage}
                  priority={index === 0}
                />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.kicker}>{post.kicker}</p>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <p className={styles.meta}>{post.date}</p>
                <span className={styles.read}>Read essay</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
