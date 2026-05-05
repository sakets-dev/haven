import { motion } from "framer-motion";
import { Download, Smartphone } from "lucide-react";
import { MotionSection } from "./MotionSection";

export function DownloadSection({ onDownloadClick }) {
  return (
    <MotionSection className="download" id="download">
      <div className="download-card">
        <motion.div
          className="download-card__overlay"
          animate={{ x: [0, 18, 0], y: [0, -18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <p className="eyebrow">Coming soon</p>
        <h2>Download Haven when it launches.</h2>
        <p>Quiet support, ready when the app is.</p>

        <div className="download__actions">
          <button className="button button--primary" type="button" onClick={onDownloadClick}>
            <Download size={18} />
            <span>Download for iPhone</span>
          </button>
          <button className="button button--secondary" type="button" onClick={onDownloadClick}>
            <Smartphone size={18} />
            <span>Download for Android</span>
          </button>
        </div>

        <p className="download-card__note">iPhone and Android, later.</p>
      </div>
    </MotionSection>
  );
}
