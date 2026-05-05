import havenMark from "../assets/haven-mark.svg";

export function Header({ navigation }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Haven home">
        <span className="brand__orb">
          <img className="brand__mark" src={havenMark} alt="" />
        </span>
        <span className="brand__lockup">
          <span className="brand__name">HAVEN</span>
          <span className="brand__note">Quiet safety support</span>
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
