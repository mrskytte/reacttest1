import React from "react";

export default function Nav({ count }) {
  return (
    <nav>
      <h1>The button has been clicked {count} times</h1>
      <p>Yeah, the button has been clicked {count} times</p>
    </nav>
  );
}
