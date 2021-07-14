import App from "./App.js";
import Component from "./framework/Component.js";

const app = Component.prototype.render(new App());

var a = parent.document.createElement("p");
a.appendChild(document.createTextNode("hello world"));

const root = document.getElementById("root");
root.appendChild(app);
