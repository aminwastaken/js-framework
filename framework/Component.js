import render from "./functions/render.js";
import setState from "./functions/setState.js";
import shouldUpdate from "./functions/shouldUpdate.js";

//this object contains all of the framework tools

const Component = function () {};

Component.prototype.shouldUpdate = shouldUpdate;
Component.prototype.setState = setState;
Component.prototype.render = render;
Component.prototype.display = undefined;

export default Component;
