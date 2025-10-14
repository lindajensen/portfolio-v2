function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="about">About</a>
        </li>
        <li className="navbar__item">
          <a href="projects">Projects</a>
        </li>
        <li className="navbar__item">
          <a href="contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
