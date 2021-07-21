import HomePage from "./HomePage.js";
import Component from "../framework/Component.js";
import createElement from "../framework/functions/createElement.js";
import Link from "./Link.js";

class Main extends Component {
  // all components should extend from the componenet class
  constructor() {
    super(); // loading the parent component methods and properties
    return this.buildComponenent(); // this function should always be called, it returns the object to render
  }

  buildComponenent() {

    const homePage = createElement(HomePage, { title: "this is the title" });
    const someText = createElement("p", null, "some more text"); // creating a paragraph
    const output = createElement(
      // creating a div that contains a home page, a paragraph and a text node
      "div",
      null, // no properties passed
      homePage, // child 1
      someText, // child 2
      "testing testing" // child 3
      // you can pass as many children as you want in here
    );
    return output;
  }
}

export default Main;
