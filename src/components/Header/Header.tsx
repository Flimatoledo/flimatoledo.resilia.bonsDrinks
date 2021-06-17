import { Link } from "react-router-dom";
import { NavBarContainer, NavBarContent } from "./headerStyle";
export function Header() {
  return (
    <NavBarContainer>
      <NavBarContent>
        <Link to="/">Inicio</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/team">Nosso Time</Link>
        <Link to="/about">Sobre Nós</Link>
        <Link to="/drinks">Drinks</Link>
      </NavBarContent>
    </NavBarContainer>
  );
}
