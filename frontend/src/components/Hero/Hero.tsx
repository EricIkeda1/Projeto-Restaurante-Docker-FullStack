import "../../styles/hero.css";
import heroBurger from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          O melhor sabor, <span>na sua casa!</span>
        </h1>
        <p>
          Pratos preparados com ingredientes frescos e selecionados especialmente para você.
        </p>
        <div className="hero-buttons">
          <button className="primary">Pedir agora</button>
          <button className="secondary">Ver cardápio</button>
        </div>

        {/* Features extras da imagem */}
        <div className="hero-features">
          <div className="feature">
            <i className="fas fa-motorcycle"></i>
            <span>Entrega rápida<br /><strong>Em até 45 min</strong></span>
          </div>
          <div className="feature">
            <i className="fas fa-leaf"></i>
            <span>Ingredientes frescos<br /><strong>Selecionados diariamente</strong></span>
          </div>
          <div className="feature">
            <i className="fas fa-lock"></i>
            <span>Pagamento seguro<br /><strong>Seus dados protegidos</strong></span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroBurger} alt="Delicious burger" />
      </div>
    </section>
  );
}