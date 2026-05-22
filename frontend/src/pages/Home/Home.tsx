import "../../styles/home.css";
import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import ProductCard from "../../components/ProductCard/ProductCard";

// Imagens
import hamburguer1 from "../../assets/Hamburguer1.png";
import pizza from "../../assets/Pizza.png";
import parmegiana from "../../assets/Parmegiana.png";
import bolo from "../../assets/Bolo.png";
import heroBurger from "../../assets/hero.png";

export default function Home() {
  const products = [
    {
      image: hamburguer1,
      title: "X-Bacon",
      description: "Pão brioche, hambúrguer artesanal, bacon, queijo cheddar, alface, tomate e maionese especial.",
      price: "32,90"
    },
    {
      image: pizza,
      title: "Pizza Calabresa",
      description: "Molho de tomate, mussarela, calabresa fatiada e orégano.",
      price: "36,90"
    },
    {
      image: parmegiana,
      title: "Filé à Parmegiana",
      description: "Filé empanado, molho de tomate artesanal, queijo mussarela e arroz.",
      price: "34,90"
    },
    {
      image: bolo,
      title: "Petit Gâteau",
      description: "Bolo de chocolate com recheio cremoso e sorvete de creme.",
      price: "19,90"
    }
  ];

  return (
    <div className="app">
      <div className="container">
        <Header />
        
        {/* Hero Section - IDÊNTICO à imagem */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              O melhor sabor, <span>na sua casa!</span>
            </h1>
            <p>
              Pratos preparados com ingredientes frescos e selecionados especialmente para você.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Pedir agora</button>
              <button className="btn-secondary">Ver cardápio</button>
            </div>
            
            <div className="hero-features">
              <div className="hero-feature">
                <div className="feature-icon">🚚</div>
                <div className="feature-text">
                  <span>Entrega rápida</span>
                  <strong>Em até 45 min</strong>
                </div>
              </div>
              <div className="hero-feature">
                <div className="feature-icon">🥬</div>
                <div className="feature-text">
                  <span>Ingredientes frescos</span>
                  <strong>Selecionados diariamente</strong>
                </div>
              </div>
              <div className="hero-feature">
                <div className="feature-icon">🔒</div>
                <div className="feature-text">
                  <span>Pagamento seguro</span>
                  <strong>Seus dados protegidos</strong>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <img src={heroBurger} alt="Hambúrguer artesanal" />
          </div>
        </section>
        
        <Categories />
        
        <section className="products">
          <div className="section-title">
            <h2>Destacados do cardápio</h2>
            <span>Ver todos</span>
          </div>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}