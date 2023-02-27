import "./FoodList.css";

function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}, ${date.getMonth() + 1}, ${date.getDate()}`;
  }

function FoodListItem({ item }) {
  const { imgUrl, title, calorie, content } = item;

  return (
    <div className="FoodListItem">
      <img className="FoodLsitItem_img" src={imgUrl} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{calorie}</p>
        <p>{content}</p>
        <p>{formatDate(item.createdAt)}</p>{" "}
      </div>
    </div>
  );
}

function FoodList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <FoodListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default FoodList;
