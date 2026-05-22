import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";

import { products } from "../../data/products";

import "../../styles/home.css";

export function Home() {
  return (
    <div className="home">
      <Header />

      <Hero />

      <section className="products-section">
        <div className="section-title">
          <span>Cardápio</span>

          <h2>Nossos Produtos</h2>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}