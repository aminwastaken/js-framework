export default Object.prototype.prop_access = function prop_access(path) {
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
