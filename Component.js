const generateNodeElements = (obj) => {
  const elementToRender = document.createElement(obj.type);
  if (obj.children) {
    for (let child of obj.children) {
      const childToRender =
        typeof child === "string"
          ? document.createTextNode(child) // if the child is a string, a text node is created
          : generateNodeElements(child); // the generateNodeElements function gets called for each child that isn't a string
      elementToRender.appendChild(childToRender); // all children are added inside the parent element
    }
  }

  // getting all the event listeners from the input and implementing them in the element to render
  if (obj.attributes) {
    for (let attribute in obj.attributes) {
      if (attribute.startsWith("on")) {
        elementToRender.addEventListener(
          attribute.replace(/^on/, ""),
          obj.attributes[attribute]
        );
      }
    }
  }

  return elementToRender;
};

//this object contains all of the framework tools
const Component = { generateNodeElements: generateNodeElements };

export default Component;
