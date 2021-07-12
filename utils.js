Object.prototype.prop_access = function prop_access(path) {
    const obj = this;
    if (path == null || path == "" || typeof path != 'string'){
        console.log(path+" not exist.")
        return obj
    }
    let result = path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : null
    }, obj)
    if (result) {
        return result
    } else {
        console.log(path+" not exist.")
        return obj
    }
}

String.prototype.interpolate = function () {
    const str = this;
    const regex_pattern = /\{\{ ([\w|\.]*) \}\}/gm;
    console.log("str.replace: "+str.replace(regex_pattern, expander));

    function expander(match, g, pos, str) {
        let g_s = g.split('.');
        let obj = eval(g_s[0]);
        let path = g_s.slice(1).join('.');
        return obj.prop_access(path);
    }
}

function test_interpolate () {
    let object = { // Local
        value1: 5,
        value2: 6
    }

    "The object has values {{ object.value1 }} and {{ object.value2 }}".interpolate();
}

let object = { // Global
    value1: 1,
    value2: 2
}

test_interpolate();