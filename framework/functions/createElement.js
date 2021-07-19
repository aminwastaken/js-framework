import type_check from "../../type_check.js";
import TypeCheckError from "../../Errors/TypeCheckError.js"

const createElement = (type, props, ...children) => {
  if (typeof type === "function") {
    if(type.prop_types && !type_check(props, {type:"object", properties: type.prop_types})){
      throw new TypeCheckError("create element")
    } else {
      return new type(props, ...children);
    }
  }
  return {
    type, // add the new here if the type is a function
    props: {
      ...props,
    },
    children: children,
  };
};

export default createElement;
