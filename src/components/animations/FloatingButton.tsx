import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingButtonProps {
  children: ReactNode;
}

export const FloatingButton = ({ children }: FloatingButtonProps) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};