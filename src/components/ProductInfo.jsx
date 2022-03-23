import { useState } from "react";

function ProductInfo(props) {
  const arr = [];
  for (let i = 1; i < 20; i++) {
    if (props.product[`strIngredient${i}`]) {
      // console.log(props.product[`strIngredient${i}`])
      arr.push(props.product[`strIngredient${i}`]);
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          border: "2px solid grey",
          marginTop: "10px"
        }}
      >
        {console.log(props.product)}
        <img src={props.product["strMealThumb"]} width="300" />
        <h3>{props.product["strMeal"]}</h3>
        <br />
        <h3>Instructions</h3>
        <p>{props.product["strInstructions"]}</p>
        <br />
        <h3>Ingredients</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {arr.map((item) => {
            return (
              <li style={{ listStyle: "none", border: "1px solid black" }}>
                {item}
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
