import { Variants } from "framer-motion";

//W---------={ Reusable fadeUp animation function }=----------</br>
export const fadeUpAnimation = (y = 0, duration = 0, delay = 0) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay },
});

//W---------={ Reusable fadeRight animation function }=----------</br>
export const fadeRightAnimation = (x = 20, duration = 0.5, delay = 0) => ({
  initial: { opacity: 0, x },
  animate: { opacity: 1, x: 0 },
  transition: { duration, delay },
});

//W---------={ FadeUp Animation }=----------</br>
export const fadeUp = {
  hidden: (y = 0) => ({
    opacity: 0,
    y: y,
  }),
  visible: ({ delay = 0, y = 0 } = {}) => ({
    opacity: 1,
    y: y,
    transition: { duration: 0.8, delay },
  }),
};
// Fade Left
export const fadeLeftAnimation = (
  x = -20,
  duration = 0.5,
  delay = 0
) => ({
  initial: { opacity: 0, x },
  animate: { opacity: 1, x: 0 },
  transition: { duration, delay },
});

// Scale In
export const scaleAnimation = (
  scale = 0.9,
  duration = 0.5,
  delay = 0
) => ({
  initial: { opacity: 0, scale },
  animate: { opacity: 1, scale: 1 },
  transition: { duration, delay },
});

// Hover Lift
export const hoverLift = {
  whileHover: {
    y: -8,
    transition: { duration: 0.2 },
  },
};

// Image Zoom
export const imageZoom = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

// Generic scroll-reveal variant.
// Usage: <motion.div variants={fadeUp} custom={{ y: 30, delay: 0 }} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} />
export const fadeUp2: Variants = {
  hidden: (custom?: { y?: number; delay?: number }) => ({
    opacity: 0,
    y: custom?.y ?? 24,
  }),
  visible: (custom?: { y?: number; delay?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom?.delay ?? 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};