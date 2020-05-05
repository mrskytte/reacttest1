import React from "react";
import Card from "./Card";
import Form from "./Form";

export default function List(props) {
  const cards = props.cards.map((c) => (
    <Card
      {...c}
      key={c.id}
      moveCard={props.moveCard}
      deleteCard={props.deleteCard}
    />
  ));
  return (
    <article className="list">
      <h1>{props.name}</h1>
      {cards}
      <Form formFunction={props.formFunction} name={props.dataname} />
    </article>
  );
}
