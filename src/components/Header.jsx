import { motion } from "framer-motion";
import havenLogo from "../assets/web_logo.png";

export function Header({ navigation, isLight }) {
  return (
    <header className={`site-header ${isLight ? "site-header--light" : ""}`}>
      <motion.a
        className="brand"
        href="#top"
        aria-label="Haven home"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="brand__orb">
          <img className="brand__mark" src={havenLogo} alt="" />
        </span>
        <span className="brand__lockup">
          <span className="brand__name">HAVEN</span>
          <span className="brand__note">A Safe Way Forward</span>
        </span>
      </motion.a>

      <nav className="site-nav" aria-label="Primary">
        {navigation.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            {item.label}
          </motion.a>
        ))}
      </nav>
    </header>
  );
}
