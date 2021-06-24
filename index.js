import Component from "./Component.js";

const myobj = {
  type: "div",
  children: [
    { type: "p", children: ["test"] },
    { type: "div", children: [{ type: "a", children: ["link1"] }] },
  ],
};

const output = Component.generateNodeElements(myobj);
var a = parent.document.createElement("p");
a.innerHTML = "hello";

const root = document.getElementById("root");
root.appendChild(output);
