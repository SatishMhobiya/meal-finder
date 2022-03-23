import { useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid";
import ProductInfo from "./components/ProductInfo";
import Search from "./components/Search";
import "./styles.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [backupList, setBackupList] = useState([]);
  const [productInfoCheck, setProductInfoCheck] = useState(false);
  useEffect(() => {
    console.log("Mounting");
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProductList(data.meals);
        setBackupList(data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateProducts = (newProducts) => {
    // setBackupList(newProducts)

    console.log(newProducts);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${newProducts}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBackupList(data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {productInfoCheck ? (
        <ProductInfo />
      ) : (
        <div>
          <Search productList={productList} updateProducts={updateProducts} />
          <ProductGrid productList={backupList} />
        </div>
      )}
    </div>
  );
}
export default App;
