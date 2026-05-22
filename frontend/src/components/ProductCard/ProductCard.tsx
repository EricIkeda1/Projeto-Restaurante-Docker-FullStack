import "../../styles/productCard.css";

interface Props {
  image: string;
  title: string;
  description: string;
  price: string;
}

export default function ProductCard({ image, title, description, price }: Props) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="product-footer">
          <strong>R$ {price}</strong>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}