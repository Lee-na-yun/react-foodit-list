import FoodList from "./FoodList";
import mockItems from "../mock.json";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewClick = () => setOrder("createdAt");
  const handleCalClick = () => setOrder("calorie");
  const handleDelClick = (id) => {
    const delItem = items.filter((item) => item.id !== id);
    setItems(delItem);
  };

  return (
    <div>
      <button onClick={handleNewClick}>최신순</button>
      <button onClick={handleCalClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelClick}/>
    </div>
  );
}

export default App;
