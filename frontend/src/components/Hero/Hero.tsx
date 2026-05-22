import "../../styles/hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span>Restaurante Premium</span>

        <h2>
          O melhor sabor
          <br />
          da cidade
        </h2>

        <p>
          Descubra pratos incríveis preparados com ingredientes frescos
          e selecionados especialmente para você.
        </p>

        <button>
          Ver Cardápio
        </button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200"
          alt="Pizza"
        />
      </div>
    </section>
  );
}