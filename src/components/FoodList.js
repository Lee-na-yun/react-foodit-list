import "./FoodList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}, ${date.getMonth() + 1}, ${date.getDate()}`;
}

function FoodListItem({ item, onDelete }) {
  const { imgUrl, title, calorie, content } = item;
  const handleDeleteItem = () => onDelete(item.id);

  return (
    <div className="FoodListItem">
      <img className="FoodLsitItem_img" src={imgUrl} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{calorie}</p>
        <p>{content}</p>
        <p>{formatDate(item.createdAt)}</p>
        <button onClick={handleDeleteItem}>삭제</button>
      </div>
    </div>
  );
}

function FoodList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <FoodListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default FoodList;
