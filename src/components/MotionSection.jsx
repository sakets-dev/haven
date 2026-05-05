import { motion } from "framer-motion";

const defaultTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

export function MotionSection({
  as = "section",
  className = "",
  delay = 0,
  children,
  ...props
}) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...defaultTransition, delay }}
      {...props}
    >
      {children}
    </Component>
  );
}
