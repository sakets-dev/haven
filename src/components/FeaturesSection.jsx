import { motion } from "framer-motion";
import {
  BellRing,
  BookHeart,
  ClipboardList,
  ContactRound,
  MapPinned,
  NotebookTabs,
} from "lucide-react";
import { MotionSection } from "./MotionSection";
import { SectionHeading } from "./SectionHeading";

const icons = [
  BellRing,
  ContactRound,
  MapPinned,
  ClipboardList,
  NotebookTabs,
  BookHeart,
];

export function FeaturesSection({ items }) {
  return (
    <MotionSection className="section" id="features">
      <SectionHeading
        eyebrow="Features"
        title="A few essentials, kept simple."
        description="Quick help in urgent moments, with space for planning, records, support, and safer next steps."
      />

      <div className="feature-grid">
        {items.map((item, index) => {
          const Icon = icons[index] ?? BellRing;

          return (
            <motion.article
              className="feature-card"
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
            >
              <div className="feature-card__top">
                <Icon className="feature-card__icon" size={20} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </MotionSection>
  );
}
