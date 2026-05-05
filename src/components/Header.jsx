import havenLogo from "../assets/web_logo.png";

export function Header({ navigation, isLight }) {
  return (
    <header className={`site-header ${isLight ? "site-header--light" : ""}`}>
      <a className="brand" href="#top" aria-label="Haven home">
        <span className="brand__orb">
          <img className="brand__mark" src={havenLogo} alt="" />
        </span>
        <span className="brand__lockup">
          <span className="brand__name">HAVEN</span>
          <span className="brand__note">A Safe Way Forward</span>
        </span>
      </a>

      <nav className="site-nav" aria-label="Primary">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
