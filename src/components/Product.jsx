function Product(props) {
  return (
    <div>
      <div
        onClick={() => {
          props.showProductDetail(props.product);
        }}
        class="product-container"
        style={{ border: "1px solid black" }}
      >
        <img
          className="meal-image"
          src={props.product["strMealThumb"]}
          style={{ height: "200px", width: "200px" }}
        />
        <h3 className="meal-name">{props.product["strMeal"]}</h3>
        <div className="middle">
          <div className="text">{props.product["strCategory"]}</div>
        </div>
      </div>
    </div>
  );
}
export default Product;
