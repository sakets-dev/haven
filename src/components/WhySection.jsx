import { motion } from "framer-motion";
import { Clock3, Shield, HeartHandshake } from "lucide-react";
import { MotionSection } from "./MotionSection";
import { SectionHeading } from "./SectionHeading";

const iconMap = [Clock3, Shield, HeartHandshake];

export function WhySection({ items }) {
  return (
    <MotionSection className="section" id="approach">
      <SectionHeading
        eyebrow="Built with care"
        title="Designed to support urgent moments and next steps."
      />

      <div className="why-grid">
        {items.map((item, index) => {
          const Icon = iconMap[index] ?? Shield;

          return (
            <motion.article
              className="why-card"
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="why-card__top">
                <span>{item.number}</span>
                <Icon className="why-card__icon" size={20} />
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
