import "./filter.scss";

export default function Filter() {
  return (
    <div className="filter">
      <h1>
        search results for <b>New York</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id="city" placeholder="city Location" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" id="minPrice" placeholder="any" />
        </div>

        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="text" id="maxPrice" placeholder="any" />
        </div>

        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id="bedroom" placeholder="any" />
        </div>
        <button>
          <img src="/search.png" alt="search button image" />
        </button>
      </div>
    </div>
  );
}
