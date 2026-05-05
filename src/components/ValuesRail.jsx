import { Compass, LockKeyhole, Map, Siren, Sparkles } from "lucide-react";
import { MotionSection } from "./MotionSection";

const icons = [Sparkles, Siren, Compass, Map, LockKeyhole];

export function ValuesRail({ items }) {
  return (
    <MotionSection className="values-rail" aria-label="Guiding values">
      <p className="values-rail__intro">
        Emergency alerts, planning tools, nearby support, and private records in one calmer flow.
      </p>
      <div className="values-rail__list">
        {items.map((item, index) => {
          const Icon = icons[index] ?? Sparkles;

          return (
            <div className="values-rail__item" key={item}>
              <Icon size={16} />
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </MotionSection>
  );
}
