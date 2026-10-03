import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../../styles/projects.module.css";

export type Shot = { src: string; label: string };

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

export default ScreenshotGallery;
