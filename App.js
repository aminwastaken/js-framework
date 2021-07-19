import Component from "./framework/Component.js";
import createElement from "./framework/functions/createElement.js";
import Main from "./components/main.js";
import TypeCheckComponent from "./components/TypeCheckComponent.js";
import routing from "./framework/functions/routing.js";

class App extends Component {
  // all components should extend from the componenet class
  constructor() {
    super(); // loading the parent component methods and properties
    return this.buildComponenent(); // this function should always be called, it returns the object to render
  }

  buildComponenent() {
    return routing([
      { path: "/",
        component: Main
      },
      {
        path: "/second",
        component: createElement("div", null, "This is the second route"),
      },
      {
        path: "/third",
        component: createElement("div", null, "This is the third route"),
      },
      {
        path: "/typeCheckError",
        component: TypeCheckComponent,
      },
    ]);

  }
}

export default App;
