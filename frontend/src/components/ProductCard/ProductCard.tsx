import "../../styles/productCard.css";

type ProductCardProps = {
  image: string;
  name: string;
  description: string;
  price: number;
};

export function ProductCard({
  image,
  name,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <div className="product-content">
        <span>Premium</span>

        <h3>{name}</h3>

        <p>{description}</p>

        <div className="product-footer">
          <strong>R$ {price}</strong>

          <button>
            Pedir
          </button>
        </div>
      </div>
    </div>
  );
}