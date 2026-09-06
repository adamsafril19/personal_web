import { motion, HTMLMotionProps } from "framer-motion";
import React, { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  as?: keyof HTMLMotionProps<"div">;
}

const directionVariants = {
  up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
};

export const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as: Component = "div",
}: ScrollRevealProps) => {
  const variants = directionVariants[direction];

  return (
    <motion.div
      as={Component}
      className={className}
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  delay = 0,
  className = "",
}: { children: ReactNode; delay?: number; className?: string }) => {
  return (
    <motion.div className={className} initial="hidden" animate="show">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement, {
          transition: { delay: delay + index * 0.1 },
        })
      )}
    </motion.div>
  );
};

StaggerContainer.defaultProps = {
  variants: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  },
};