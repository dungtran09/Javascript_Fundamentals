import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>My React Application!</h1>
      <h1>Hello Word!</h1>
      <h3>Hi, How are you?</h3>
    </div>
  );
};

const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);
root.render(<App />);
