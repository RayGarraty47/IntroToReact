import { createRoot } from "react-dom/client";
import React from "react";
import SearchParams from "./SearchParams";

// Passing the following parent properties

const App = () => {
  return (
  <div> 
    <h1>Adopt Me!</h1>
    <SearchParams />
  </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);





const A = "A";
let F;

function doStuff(B) {
  console.log(B); // in scope
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else"; // in scope
  }
  console.log(D); //out of scope D was declared in if statement block
  console.log(H); // in scope H was declared in same funciton block
  F = "F"; 
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // in scope
  const G = "G";
}
console.log(E); // in scope 
console.log(G); // out of scope

doStuff("B");
console.log(B); // out of scope
console.log(C); // out of scope
console.log(F); // in scope
