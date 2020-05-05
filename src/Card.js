import React from "react";
import Button from "./Button";

export default function Card(props) {
  return (
    <section className="card">
      <h3>{props.title}</h3>
      <p>Assigned to {props.assignedTo}</p>
      <Button
        callback={props.moveCard}
        cardID={props.id}
        name="To Do"
        dataName="todo"
      />
      <Button
        callback={props.moveCard}
        cardID={props.id}
        name="Doing"
        dataName="doing"
      />
      <Button
        callback={props.moveCard}
        cardID={props.id}
        name="Done"
        dataName="done"
      />
      <Button name="Delete" cardID={props.id} callback={props.deleteCard} />
    </section>
  );
}
