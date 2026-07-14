function ProductCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
        className="card-image"
      />

      <div className="card-body">
        <span className="category">{product.category}</span>

        <h2>{product.title}</h2>

        <p>{product.description}</p>

        <div className="card-footer">
          <h3>Rs. {product.price}</h3>

          <span className="rating">
            ⭐ {product.rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;