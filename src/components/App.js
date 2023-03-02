import FoodList from "./FoodList";
//import mockItems from "../mock.json";
import { useState } from "react";
import { getFoods } from "../api";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewClick = () => setOrder("createdAt");
  const handleCalClick = () => setOrder("calorie");
  const handleDelClick = (id) => {
    const delItem = items.filter((item) => item.id !== id);
    setItems(delItem);
  };

  const handleLoadClick = async () => {
    const {foods} = await getFoods();
    setItems(foods);
  }

  return (
    <div>
      <button onClick={handleNewClick}>최신순</button>
      <button onClick={handleCalClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelClick}/>
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
