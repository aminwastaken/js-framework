import Component from "./Component.js";
const anotherObject = (props) => {
  console.log("props");
  console.log(props);
  return {
    type: "strong",
    children: ["i'm a child"],
  };
};
const myobj = {
  // object example
  type: "div",
  children: [
    {
      type: "p",
      children: ["test"],
      props: { onclick: (event) => console.log(event.target) },
    },
    { type: "div", children: [{ type: "a", children: ["link1"] }] },
    { type: anotherObject, props: { prop1: "myprop" } },
  ],
  props: { test: "hiii" },
};

const output = Component.generateNodeElements(myobj);
var a = parent.document.createElement("p");
// a.innerHTML = "click me";
// a.addEventListener("click", (event) => console.log("works here"));

const root = document.getElementById("root");
root.appendChild(output);
