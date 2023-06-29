import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import "./App.css";

function App() {
  const [cardArray, setCardArray] = useState([
    {
      name: "루피",
      url: "https://cdn.pixabay.com/photo/2020/04/25/09/52/onepiece-5090120_1280.jpg",
      isChecked: false,
    },
    {
      name: "조로",
      url: "https://cdn.pixabay.com/photo/2020/04/29/15/34/onepiece-5109337_1280.png",
      isChecked: false,
    },
    {
      name: "상디",
      url: "https://cdn.pixabay.com/photo/2020/04/27/16/39/onepiece-5100625_1280.jpg",
      isChecked: false,
    },
    {
      name: "우솝",
      url: "https://cdn.pixabay.com/photo/2020/05/15/18/23/onepiece-5174577_1280.png",
      isChecked: false,
    },
    {
      name: "쵸파",
      url: "https://cdn.pixabay.com/photo/2020/04/24/17/05/onepiece-5087720_1280.jpg",
      isChecked: false,
    },
    {
      name: "닌텐도",
      url: "https://cdn.pixabay.com/photo/2020/04/15/15/00/gamer-5046924_1280.jpg",
      isChecked: false,
    },
    {
      name: "PSP",
      url: "https://cdn.pixabay.com/photo/2020/04/19/15/47/sony-5064177_1280.jpg",
      isChecked: false,
    },
    {
      name: "컨트롤러1",
      url: "https://cdn.pixabay.com/photo/2020/04/13/18/30/playstation-5039666_1280.jpg",
      isChecked: false,
    },
    {
      name: "컨트롤러2",
      url: "https://cdn.pixabay.com/photo/2020/04/15/14/59/xbox-5046923_1280.jpg",
      isChecked: false,
    },
    {
      name: "컨트롤러3",
      url: "https://cdn.pixabay.com/photo/2020/05/08/18/49/super-5146914_1280.jpg",
      isChecked: false,
    },
  ]);

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {}, [cardArray, currentScore, bestScore]);

  const handleClick = (e) => {
    shuffle();
    const name = e.target.parentNode.parentNode.children[1].textContent;

    setCardArray((prev) =>
      prev.map((item) => {
        if (item.name === name) {
          if (isCorrect(name, currentScore)) {
            return {
              ...item,
              isChecked: true,
            };
          }
          return item;
        }
        return item;
      })
    );
  };

  const isCorrect = (name, curScore) => {
    // if guessed correct, curScore++, continue
    // else set bestScore, reset
    const card = cardArray.find((item) => item.name === name);
    if (card.isChecked) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      reset();
      return false;
    }
    setCurrentScore(curScore + 1);
    return true;
  };

  const shuffle = () => {
    const shuffledArray = [...cardArray].sort(() => Math.random() - 0.5);
    setCardArray(shuffledArray);
  };

  const reset = () => {
    setCurrentScore(0);
    setCardArray((prev) =>
      prev.map((item) => {
        return {
          ...item,
          isChecked: false,
        };
      })
    );
  };

  return (
    <div className="root">
      <div className="App">
        <h1>Memory Game</h1>
        <div className="score-board">
          <span className="current">Current: {currentScore}</span>
          <span className="best">Best: {bestScore}</span>
        </div>
        <Content cards={cardArray} onClick={handleClick} />
        <button className="reset" type="button" onClick={reset}>
          Reset
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;

/*
  Title
  Score board(Current, Best)
  Cards(5 * 2)
  Reset / Overlay
  Footer

  Cards: name, image, checked?
  App: controller
    shuffle array when clicked
    set score
    hit again or reach 10 - end
    state: array contains 10 cards,

*/

// Photo by die_grafiktheke on Pixabay
