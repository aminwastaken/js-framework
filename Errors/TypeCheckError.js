export default function TypeCheckError(props, type) {
    let instance = new Error(`Invalid props for component ${type.prototype.constructor.name}, expected ${JSON.stringify(type.prop_types)}, got ${JSON.stringify(props)}` );
    instance.name = "TypeCheck error";
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    // if(Error.captureStackTrace) {
    //     Error.captureStackTrace(instance, TypeCheckError);
    // }
    return instance;
}