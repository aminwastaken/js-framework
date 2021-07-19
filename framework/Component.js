import shouldUpdate from "./functions/shouldUpdate.js";

//this object contains all of the framework tools

const Component = function () {};

Component.prototype.shouldUpdate = shouldUpdate;
Component.prototype.display = undefined;
Component.prototype.prop_types = undefined;

export default Component;
