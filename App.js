import HomePage from "./components/HomePage.js";
import Component from "./framework/Component.js";
import createElement from "./framework/functions/createElement.js";
import Main from "./components/main.js";

class App extends Component {
  // all components should extend from the componenet class
  constructor() {
    super(); // loading the parent component methods and properties
    return this.buildComponenent(); // this function should always be called, it returns the object to render
  }

  buildComponenent() {
    const output = createElement(Main);
    return output;
    // routeFunc("/", Main)
    // routeFunc("/", createElement(Main))
  }
}

export default App;
