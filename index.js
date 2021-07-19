import App from "./App.js";
import render from "./framework/functions/render.js";

const app = render(new App());

const root = document.getElementById("root");
root.appendChild(app);
