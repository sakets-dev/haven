import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { siteContent } from "./data/content";
import { DownloadSection } from "./components/DownloadSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PrivacySection } from "./components/PrivacySection";
import { Toast } from "./components/Toast";
import { ValuesRail } from "./components/ValuesRail";

const DOWNLOAD_MESSAGE = "Haven downloads will open here soon.";

function App() {
  const [toastMessage, setToastMessage] = useState("");
  const [isHeaderLight, setIsHeaderLight] = useState(false);

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setToastMessage("");
    }, 2600);

    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsHeaderLight(window.scrollY > 80);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  const showComingSoon = () => {
    setToastMessage(DOWNLOAD_MESSAGE);
  };

  return (
    <div className="page-shell">
      <Header navigation={siteContent.navigation} isLight={isHeaderLight} />

      <main id="top">
        <HeroSection
          content={siteContent.hero}
          tags={siteContent.hero.tags}
          onDownloadClick={showComingSoon}
        />
        <ValuesRail items={siteContent.values} />
        <FeaturesSection items={siteContent.features} />
        <PrivacySection panels={siteContent.storyPanels} />
        <DownloadSection onDownloadClick={showComingSoon} />
      </main>

      <Footer />

      <AnimatePresence>
        {toastMessage ? <Toast message={toastMessage} /> : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
