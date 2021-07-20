import UndefinedPropertyError from "../../Errors/undefined_property_error.js"

export default Object.prototype.prop_access = function prop_access(path) {
    const obj = this;
    if (path == null || path == "" || typeof path != 'string'){
        console.error("prop_access: invalid path in object "+obj.toString()); // ToDo: Faire un autre erreur pour ça
        return obj
    }
    let result = path.split('.').reduce(function(prev, curr) {
        if(prev){
            if(prev[curr]){
                return prev[curr]
            } else {
                throw new UndefinedPropertyError(curr, path, obj);
            }
        } else {
            return null
        }
    }, obj)
    return result
}