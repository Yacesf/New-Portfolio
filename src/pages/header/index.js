import "./index.css";

function Header() {
  return (
    <div className="header">
      <h1 id="page-title">Y.SAFSAFI</h1>
      <nav>
        <ul className="header__ul">
          <li className="header__ul__li">
          <a href="#">PRESENTATION</a>
          </li>
          <li className="header__ul__li">
          <a href="#">PROJET</a>
          </li>
          <li className="header__ul__li">
          <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
        <div className="header__cv">MON CV</div>
    </div>
  );
}

export default Header;
