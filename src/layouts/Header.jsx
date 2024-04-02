import Logo from "../components/Logo.jsx";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink
        to="/kasa.version2"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <Logo />
      </NavLink>
      <Navigation />
    </header>
  );
};

export default Header;
