import { Link } from "react-router-dom";
import logo from "../assets/icons_assets/Logo.svg";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <Link to="/" aria-label="Ir al inicio">
          <img src={logo} alt="Little Lemon" />
        </Link>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
