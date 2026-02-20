export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    position: 'absolute',
  }),
  visible: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: 'relative',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
      when: "beforeChildren",
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    position: 'absolute',
  }),
};