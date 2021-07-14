import HomePage from "./components/HomePage.js";
import Component from "./framework/Component.js";

class App extends Component {
  // all components should extend from the componenet class
  constructor() {
    super(); // loading the parent component methods and properties
    return this.buildComponenent(); // this function should always be called, it returns the object to render
  }

  buildComponenent() {
    const homePage = new HomePage(); // this is how you can import another component
    const someText = this.createElement("p", null, "some more text"); // creating a paragraph
    const output = this.createElement(
      // creating a div that contains
      "div",
      null, // no properties passed
      homePage, // child 1
      someText, // child 2
      "testing testing" // child 3
      // you can pass as many children as you want in her
    );
    return output;
  }
}

export default App;
