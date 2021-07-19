import App from "./App.js";
import createElement from "./framework/functions/createElement.js";
import render from "./framework/functions/render.js";

const app = render(createElement(App));

const root = document.getElementById("root");
root.appendChild(app);
