import React, { useState } from "react";

export default function Button(props) {
  function btnFunction(evt) {
    props.callback(props.cardID, props.dataName);
  }
  return <button onClick={btnFunction}>{props.name}</button>;
}
