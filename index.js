import Component from "./Component.js";

const myobj = {
  type: "div",
  children: [
    {
      type: "p",
      children: ["test"],
      attributes: { onclick: (event) => console.log(event.target) },
    },
    { type: "div", children: [{ type: "a", children: ["link1"] }] },
  ],
};

const output = Component.generateNodeElements(myobj);
var a = parent.document.createElement("p");
a.innerHTML = "click me";
a.addEventListener("click", (event) => console.log("works here"));

const root = document.getElementById("root");
root.appendChild(output);
root.appendChild(a);
