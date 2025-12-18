import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollAnimatedElementProps {
  children: ReactNode;
  delay?: number;
  type?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scale" | "slideInUp";
  className?: string;
}

const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function ScrollAnimatedElement({
  children,
  delay = 0,
  type = "fadeInUp",
  className = "",
}: ScrollAnimatedElementProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={animationVariants[type]}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
}
