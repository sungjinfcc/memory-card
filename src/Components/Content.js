import React from "react";

function Content({ cards, onClick }) {
  return (
    <div>
      <h1>Contents</h1>
      {cards.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <img src={item.url} alt={item.name} />
            <p>isChecked: {item.isChecked ? "Yes" : "No"}</p>
            <button type="button" onClick={onClick}>
              Click me to set name empty!
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
