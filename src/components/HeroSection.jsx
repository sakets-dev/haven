import { motion } from "framer-motion";
import { ArrowDownRight, MapPinned, ShieldCheck, TimerReset } from "lucide-react";
import { MotionSection } from "./MotionSection";

const tagIcons = {
  Fast: TimerReset,
  Private: ShieldCheck,
  Calm: MapPinned,
};

export function HeroSection({ content, tags, onDownloadClick }) {
  return (
    <MotionSection className="hero">
      <motion.div
        className="hero__veil"
        animate={{ rotate: [0, 3, 0], scale: [1, 1.04, 1], x: [0, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero__halo hero__halo--one"
        animate={{ x: [0, 24, -8, 0], y: [0, 18, -16, 0], opacity: [0.28, 0.5, 0.34, 0.28] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero__halo hero__halo--two"
        animate={{ x: [0, -18, 14, 0], y: [0, -12, 14, 0], opacity: [0.18, 0.34, 0.2, 0.18] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero__halo hero__halo--three"
        animate={{ x: [0, 14, -10, 0], y: [0, 10, -12, 0], opacity: [0.12, 0.22, 0.14, 0.12] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero__halo hero__halo--four"
        animate={{ x: [0, -16, 8, 0], y: [0, 10, -8, 0], opacity: [0.1, 0.2, 0.12, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="hero__copy">
        <p className="hero__brandline">{content.brand}</p>
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 className="hero__title">{content.title}</h1>
        <p className="hero__text">{content.description}</p>

        <div className="hero__actions">
          <button className="button button--primary" type="button" onClick={onDownloadClick}>
            Download Haven
          </button>
          <a className="button button--secondary" href="#features">
            Explore
            <ArrowDownRight size={18} />
          </a>
        </div>

        <ul className="hero__tags" aria-label="Core principles">
          {tags.map((tag) => {
            const Icon = tagIcons[tag] ?? ShieldCheck;

            return (
              <motion.li
                key={tag}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="hero__tag-icon" size={18} />
                <span>{tag}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <span>Scroll</span>
        <i></i>
      </motion.div>
    </MotionSection>
  );
}
