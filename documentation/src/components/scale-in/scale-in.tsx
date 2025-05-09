import React from "react";
import { useActors, useMakeup, Stage, StyleOptions } from "@react-theater/scroll";

const ScaleInContent = ({
  children,
  start = 0.05,
  end = 0.25,
  scale = 5,
  setActorStyle,
}: {
  children: React.ReactNode;
  start?: number;
  end?: number;
  scale?: number;
  setActorStyle: (style: StyleOptions) => void;
}) => {
  // Change
  useActors([
    {
      start: 0,
      end: start,
      screen: true,
      onUpdate: () => {
        setActorStyle({
          opacity: 0,
        });
      },
    },
    {
      start,
      end,
      screen: true,
      onUpdate: ({ progress }) => {
        setActorStyle({
          opacity: progress,
          scale: scale - (scale - 1) * progress,
        });
      },
    },
  ]);

  return children;
};

export const ScaleIn = ({
  children,
  start,
  end,
  scale,
  className,
  isStage = true,
  ...rest
}: {
  children: React.ReactNode;
  start?: number;
  end?: number;
  scale?: number;
  isStage?: boolean;
} & React.HTMLProps<HTMLDivElement>) => {
  const [actorRef, setActorStyle] = useMakeup();
  const Component = isStage ? Stage : "div";

  return (
    <Component {...rest} ref={actorRef} className={`${className || ""} opacity-0 will-change-transform`}>
      <ScaleInContent start={start} end={end} scale={scale} setActorStyle={setActorStyle}>
        {children}
      </ScaleInContent>
    </Component>
  );
};
