import Component from "./framework/Component.js";

const p = Component.createElement("p", { name: "paragraph" }, "my text");
const div = Component.createElement("div", null, p);
console.log(div);

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
      children: ["yolo"],
      props: {
        onclick: (event) => console.log(event.target),
        name: "im just a string",
      },
    },
    { type: "div", children: [{ type: "a", children: ["link1"] }] },
    { type: anotherObject, props: { prop1: "myprop" } },
  ],
  props: { name: "mydiv" },
};

const output = Component.render(div);
var a = parent.document.createElement("p");

const root = document.getElementById("root");
root.appendChild(output);
