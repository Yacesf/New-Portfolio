import "./index.css";

function Header() {
  return (
    <div className="header">
      <h1 id="page-title">Y.SF Portfolio</h1>
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
      <div className="header__link">
        <a href="#" className="header__link__item">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#" className="header__link__item">
          MON CV
        </a>
      </div>
    </div>
  );
}

export default Header;
