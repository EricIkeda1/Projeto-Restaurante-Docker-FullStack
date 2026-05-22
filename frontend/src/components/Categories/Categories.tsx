import "../../styles/categories.css";

export default function Categories() {
  return (
    <section className="categories">
      <button className="active">Todos</button>
      <button>Hambúrgueres</button>
      <button>Pizzas</button>
      <button>Bebidas</button>
      <button>Sobremesas</button>
    </section>
  );
}