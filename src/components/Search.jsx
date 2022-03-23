import { useState } from "react";

function Search(props) {
  const [meal, setMeal] = useState("");
  const [randomMeal, setRandomMeal] = useState([]);

  const handleChange = (e) => {
    const filteredValue = e.target.value;
    // const arr = props.productList;
    // console.log(arr);

    // const filteredList = arr.filter((item)=>{

    //  return (item["strCategory"].includes(filteredValue));
    // })
    // console.log("***********")
    // props.updateProducts(filteredList);
    props.updateProducts(filteredValue);
  };

  const randomChange = () => {
    setMeal("");
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRandomMeal(data.meals);
        // setBackupList(data.meals);
      })
      .catch((error) => {
        console.log(error);
      });

    randomMeal.map((item) => {
      console.log(item["strMeal"]);
      props.updateProducts(item["strMeal"]);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Meal"
        value={meal}
        onChange={(e) => {
          handleChange(e);
          setMeal(e.target.value);
        }}
      />
      <button
        onClick={() => {
          randomChange();
        }}
      >
        Random
      </button>
    </div>
  );
}
export default Search;
