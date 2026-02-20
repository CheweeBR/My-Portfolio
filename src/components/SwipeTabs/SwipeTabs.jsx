import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants } from "./slideVariants";

export default function SwipeTabs({
  activeKey,
  direction,
  onDragEnd,
  children,
}) {
  return (
    <AnimatePresence initial={true} custom={direction} mode="wait">
      <motion.div
        key={activeKey}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="visible"
        exit="exit"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={onDragEnd}
        className="w-full h-full overflow-y-auto scroll-smooth custom-scrollbar absolute top-0 left-0"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}