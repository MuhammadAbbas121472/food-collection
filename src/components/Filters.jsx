function Filters({
  category,
  setCategory,
  price,
  setPrice,
  rating,
  setRating,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="filters">

      {/* Category Filter */}
      <div className="filter-item">
        <label>Category</label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Burger">Burger</option>
          <option value="Pizza">Pizza</option>
          <option value="Shawarma">Shawarma</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="filter-item">
        <label>Max Price: Rs. {price}</label>

        <input
          type="range"
          min="400"
          max="2000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>

      {/* Rating Filter */}
      <div className="filter-item">
        <label>Rating</label>

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={0}>All Ratings</option>
          <option value={4.5}>4.5+</option>
          <option value={4.6}>4.6+</option>
          <option value={4.7}>4.7+</option>
          <option value={4.8}>4.8+</option>
          <option value={4.9}>4.9</option>
        </select>
      </div>

      {/* Sorting */}
      <div className="filter-item">
        <label>Sort By</label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Default</option>

          <option value="priceLow">
            Price Low → High
          </option>

          <option value="priceHigh">
            Price High → Low
          </option>

          <option value="ratingLow">
            Rating Low → High
          </option>

          <option value="ratingHigh">
            Rating High → Low
          </option>
        </select>
      </div>

    </div>
  );
}

export default Filters;