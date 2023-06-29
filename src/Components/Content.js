import React from "react";

function Content({ cards, onClick }) {
  return (
    <div className="content">
      {cards.map((item) => {
        return (
          <div className="card" key={item.name}>
            <button onClick={onClick} type="button">
              <img src={item.url} alt={item.name} />
            </button>
            <p className="name">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
