import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TypingEffectProps {
  children: ReactNode;
  delay?: number;
  loop?: boolean;
}

export const TypingEffect = ({ children, delay = 3 }: TypingEffectProps) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{
        duration: 3,
        delay,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="overflow-hidden whitespace-nowrap"
    >
      {children}
    </motion.div>
  );
};
