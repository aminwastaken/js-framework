const createElement = (type, props, ...children) => {
  return {
    type, // add the new here if the type is a function
    props: {
      ...props,
    },
    children: children,
  };
};

export default createElement;
