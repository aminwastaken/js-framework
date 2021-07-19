import Component from "../framework/Component.js";
import createElement from "../framework/functions/createElement.js";

class HomePage extends Component {
  constructor(props, children) {
    super();
    this.props = props;
    return this.buildComponenent();
  }

  onclick(event) {
    alert("it's working");
  }

  buildComponenent() {
    const titleText = createElement(
      "h1",
      { name: "myTitle" },
      this.props.title
    );
    const paragraph = createElement(
      "p",
      { name: "pragraph" },
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi metus. Suspendisse ac placerat nisi. Pellentesque eros augue."
    );

    const button = createElement(
      "button",
      {
        onclick: this.onclick,
        name: "im just a string",
      },
      "click me "
    );
    const container = createElement("div", null, titleText, paragraph, button);
    return container;
  }
}
HomePage.prop_types = {};
//HomePage.prop_types = {title: {type: "number"}}; TypeCheck Example (throws error)
export default HomePage;
