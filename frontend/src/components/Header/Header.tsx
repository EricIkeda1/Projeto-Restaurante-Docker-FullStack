import "../../styles/header.css";
import logo from "../../assets/Logo.png";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Sabon & Arte" />
      </div>

      <nav className="nav">
        <a className="active">Início</a>
        <a>Cardápio</a>
        <a>Promoções</a>
        <a>Combos</a>
        <a>Bebidas</a>
        <a>Sobre mesas</a>
        <a>Contato</a>
      </nav>

      <div className="header-actions">
        <button>
          <FiSearch />
        </button>
        <button>
          <FiUser />
        </button>
        <button className="cart">
          <FiShoppingCart />
          Carrinho
        </button>
      </div>
    </header>
  );
}