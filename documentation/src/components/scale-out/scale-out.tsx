import React, { useEffect, useRef, useState } from "react";

export const ScaleOut = ({
  children,
  className,
  delay = 0,
  ...rest
}: {
  children: React.ReactNode;
  start?: number;
  end?: number;
  scale?: number;
  isStage?: boolean;
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
      { threshold: 0.05 },
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
        transform: visible ? "scale(1)" : "scale(0.4)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
        ...rest.style,
      }}
    >
      {children}
    </div>
  );
};
