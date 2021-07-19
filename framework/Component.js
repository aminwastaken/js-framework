import createElement from "./functions/createElement.js";
import render from "./functions/render.js";
import shouldUpdate from "./functions/shouldUpdate.js";

//this object contains all of the framework tools

const Component = function () {};

Component.prototype.shouldUpdate = shouldUpdate;
Component.prototype.display = undefined;

export default Component;
