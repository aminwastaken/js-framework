import "./prop_access.js";

export default String.prototype.interpolate = function (obj) {
    const str = this;
    const regex_pattern = /\{\{ ([\w|\.]*) \}\}/gm;

    function expander(match, path, pos, str) {
        return obj.prop_access(path);
    }
    return str.replace(regex_pattern, expander);
}


// Pour tester:
// let object = { // Global
// 	value1: 1,
// 	key: {
// 		value2: 2
// 	}
// }
// console.log("The object has values {{ value1 }} and {{ key.value2 }} but does not have {{ value3 }}.".interpolate(object));
