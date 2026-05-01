import React, { useEffect, useRef, useState } from "react";

export const FadeIn = ({
  children,
  className,
  translateY = 30,
  delay = 0,
  ...rest
}: {
  children: React.ReactNode;
  translateY?: number;
  delay?: number;
} & React.HTMLProps<HTMLDivElement>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      {...rest}
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${translateY}px)`,
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        ...rest.style,
      }}
    >
      {children}
    </div>
  );
};
