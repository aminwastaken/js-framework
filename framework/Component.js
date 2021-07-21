import render from "./functions/render.js";
import setState from "./functions/setState.js";
import shouldUpdate from "./functions/shouldUpdate.js";
import "./functions/string_interpolation.js";

//this object contains all of the framework tools

const Component = function () {
};

Component.prototype.shouldUpdate = shouldUpdate;
Component.prototype.setState = setState;
Component.prototype.setParent = function() { 
    if (Component.prototype.parent === undefined) Component.prototype.parent = this;
};


export default Component;
