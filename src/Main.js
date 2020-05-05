import React from "react";
import List from "./List";

export default function Main({ cards, formFunction, moveCard, deleteCard }) {
  console.log(cards);
  return (
    <main>
      <List
        moveCard={moveCard}
        deleteCard={deleteCard}
        formFunction={formFunction}
        name="To do"
        dataname="todo"
        cards={cards.filter((c) => c.list === "todo")}
      />
      <List
        moveCard={moveCard}
        deleteCard={deleteCard}
        formFunction={formFunction}
        name="Doing"
        dataname="doing"
        cards={cards.filter((c) => c.list === "doing")}
      />
      <List
        moveCard={moveCard}
        deleteCard={deleteCard}
        formFunction={formFunction}
        name="Done"
        dataname="done"
        cards={cards.filter((c) => c.list === "done")}
      />
    </main>
  );
}
