import React, { useState } from "react";
import Nav from "./Nav";
import Main from "./Main";

export default function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([
    {
      title: "Make it dynamic",
      list: "todo",
      added: 1588055291061,
      id: 1,
      color: "hotpink",
      assignedTo: ["jofh"],
    },
    {
      title: "Make it dynamic",
      list: "todo",
      added: 1588055091061,
      id: 2,
      color: "lightblue",
      assignedTo: ["jofh", "davi"],
    },
  ]);
  function onFormClick(data) {
    console.log(data);
  }
  function moveCard(cardID, newList) {
    const newCards = cards.map((c) => {
      c.list = c.id === cardID ? (c.list = newList) : (c.list = c.list);
      return c;
    });
    setCards(newCards);
  }
  function deleteCard(id) {
    console.log(id);
    const newCards = cards.filter((c) => c.id !== id);
    setCards(newCards);
  }
  return (
    <div className="App">
      <Nav count={count} />
      <Main
        formFunction={onFormClick}
        cards={cards}
        moveCard={moveCard}
        deleteCard={deleteCard}
      />
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
}
