export default function TypeCheckError(mess) {
    let instance = new Error(mess);
    instance.name = "TypeCheck error";
    instance.mess = mess;
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    // if(Error.captureStackTrace) {
    //     Error.captureStackTrace(instance, TypeCheckError);
    // }
    return instance;
}