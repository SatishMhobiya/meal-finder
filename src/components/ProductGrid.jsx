import { useState } from "react";
import Product from "./Product";
import ProductInfo from "./ProductInfo";

function ProductGrid(props) {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState("");

  const showProductDetail = (showProduct) => {
    setShow(true);
    setProduct(showProduct);
  };

  return (
    <>
      <h2>Meals</h2>
      <div
        className="product-list-container"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {props.productList !== null
          ? props.productList.map((item) => {
              return (
                <Product product={item} showProductDetail={showProductDetail} />
              );
            })
          : null}
      </div>
      {show ? <ProductInfo product={product} /> : null}
    </>
  );
}

export default ProductGrid;
