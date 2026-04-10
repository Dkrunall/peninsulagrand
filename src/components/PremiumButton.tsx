import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface PremiumButtonProps extends Omit<HTMLMotionProps<"button">, "variant"> {
  children: React.ReactNode;
  variant?: "solid" | "outline";
}

export function PremiumButton({ children, variant = "solid", className = "", ...props }: PremiumButtonProps) {
  const baseClass = "px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 rounded-full shadow-lg";
  const variants = {
    solid: "bg-foreground text-background hover:bg-gold hover:text-foreground",
    outline: "border-2 border-gold text-gold hover:bg-gold hover:text-foreground",
  };

  return (
    <motion.button
      className={`${baseClass} ${variants[variant]} ${className}`}
      whileHover={{ 
        y: -4, 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      whileTap={{ y: 0, scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
