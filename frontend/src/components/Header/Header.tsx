import "../../styles/header.css";

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>CP</span>

        <h1>Chef Premium</h1>
      </div>

      <nav>
        <a href="#">Início</a>
        <a href="#">Cardápio</a>
        <a href="#">Promoções</a>
        <a href="#">Contato</a>
      </nav>

      <button className="header-button">
        Entrar
      </button>
    </header>
  );
}