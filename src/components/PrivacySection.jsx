import { motion } from "framer-motion";
import { MotionSection } from "./MotionSection";

export function PrivacySection({ panels }) {
  return (
    <MotionSection className="section privacy" id="privacy">
      <div className="privacy-layout">
        <div className="privacy-copy">
          <p className="eyebrow">Feel</p>
          <h2>Soft. Quiet. Clear.</h2>
          <p>
            Haven is meant to feel welcoming, discreet, and easy to move through,
            even during stressful moments.
          </p>
          <p>
            The experience stays calm on purpose: less visual noise, fewer steps,
            and clearer paths to what matters most.
          </p>
        </div>

        <motion.div
          className="privacy-panels"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          {panels.map((panel) => (
            <article
              className={`privacy-panel ${panel.accent ? "privacy-panel--accent" : ""}`}
              key={panel.title}
            >
              <span>{panel.label}</span>
              <strong>{panel.title}</strong>
            </article>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
