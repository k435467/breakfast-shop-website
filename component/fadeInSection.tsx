import React from "react";
import styles from "./fadeInSection.module.scss";

export default function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactElement;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const domRefCurrent = domRef.current;
    if (!domRefCurrent) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      });
    });
    observer.observe(domRefCurrent);
    return () => observer.unobserve(domRefCurrent);
  });

  return (
    <div
      ref={domRef}
      className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ""}`}
    >
      {children}
    </div>
  );
}
