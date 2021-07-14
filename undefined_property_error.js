export default function UndefinedPropertyError(property, path, object) {
    var instance = new Error("Property '"+property+"' not exist for path '"+path+"', expected one of : ["+Object.keys(object)+"]");
    instance.name = "UndefinedPropertyError";
    Object.setPrototypeOf(instance,Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance,UndefinedPropertyError);
    }
    return instance;
}