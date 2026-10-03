import Link from "next/link";
import Image from "next/image";
import type { Point, Post } from "./posts";
import styles from "../../styles/journal.module.css";

const Points = ({ items }: { items: Point[] }) => (
  <div className={styles.points}>
    {items.map((item) => (
      <div key={item.title} className={styles.point} data-depth>
        <strong>{item.title}</strong>
        {item.body ? <p>{item.body}</p> : null}
        {item.bullets ? (
          <ul className={styles.bullets}>
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </div>
    ))}
  </div>
);

const Essay = ({ post }: { post: Post }) => {
  return (
    <section className={styles.container}>
      <article className={styles.article}>
        <Link href="/blog" className={styles.back}>
          Back to blog
        </Link>
        <p className={styles.kicker}>{post.kicker}</p>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>{post.date}</p>

        <figure className={styles.figure}>
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={675}
            className={styles.hero}
            priority
          />
        </figure>

        <div className={styles.prose}>
          {post.blocks.map((block, index) => {
            if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
            if (block.type === "p") return <p key={index}>{block.text}</p>;
            if (block.type === "list") {
              return (
                <ul key={index} className={styles.bullets}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <Points key={index} items={block.items} />;
          })}
        </div>
      </article>
    </section>
  );
};

export default Essay;
