import { motion } from "framer-motion";

export function Toast({ message }) {
  return (
    <motion.div
      className="toast"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.22 }}
    >
      {message}
    </motion.div>
  );
}
