import { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import "./App.css";

function App() {
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(2000);
  const [rating, setRating] = useState(0);
  const [sortBy, setSortBy] = useState("");

  let filteredProducts = [...products];

  // Category Filter
  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (item) => item.category === category
    );
  }

  // Price Filter
  filteredProducts = filteredProducts.filter(
    (item) => item.price <= price
  );

  // Rating Filter
  filteredProducts = filteredProducts.filter(
    (item) => item.rating >= rating
  );

  // Sorting
  switch (sortBy) {
    case "priceLow":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "priceHigh":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "ratingLow":
      filteredProducts.sort((a, b) => a.rating - b.rating);
      break;

    case "ratingHigh":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

  return (
    <div className="container">
      <h1>🍔 Food Collection</h1>

      <Filters
        category={category}
        setCategory={setCategory}
        price={price}
        setPrice={setPrice}
        rating={rating}
        setRating={setRating}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h2>No Products Found</h2>
        )}
      </div>
    </div>
  );
}

export default App;