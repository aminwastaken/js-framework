import createElement from "./functions/createElement.js";
import render from "./functions/render.js";
import shouldUpdate from "./functions/shouldUpdate.js";

//this object contains all of the framework tools

const Component = function () {};
Component.prototype.render = render;
Component.prototype.createElement = createElement;
Component.prototype.shouldUpdate = shouldUpdate;
Component.prototype.display = undefined;
Component.prototype.constructor = function () {
  return this.render(this.buildComponenent());
};

export default Component;
