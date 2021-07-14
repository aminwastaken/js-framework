// function that generates the html content

const generateNodeElements = (obj) => {
  let elementToRender = "";
  if (typeof obj.type === "string") {
    elementToRender = document.createElement(obj.type); // creating a node
    if (obj.children) {
      for (let child of obj.children) {
        const childToRender =
          typeof child === "string"
            ? document.createTextNode(child) // if the child is a string, a text node is created, this node will be inserted in the element to render
            : generateNodeElements(child); // the generateNodeElements function gets called for each child that isn't a string
        elementToRender.appendChild(childToRender); // all children are added inside the parent element
      }
    }

    // getting all the event listeners from the input and implementing them in the element to render
    if (obj.props) {
      for (let prop in obj.props) {
        if (prop.startsWith("on")) {
          elementToRender.addEventListener(
            prop.replace(/^on/, ""),
            obj.props[prop]
          );
        } else {
          elementToRender.setAttribute(prop, obj.props[prop]);
        }
      }
    }
  }
  // if the element is a function it gets called, and all the poperties get passed to the function
  if (typeof obj.type === "function") {
    elementToRender = generateNodeElements(obj.type(obj.props));
  }

  return elementToRender;
};

export default generateNodeElements;
