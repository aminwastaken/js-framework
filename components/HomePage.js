import Component from "../framework/Component.js";
import createElement from "../framework/functions/createElement.js";
import Link from "./Link.js";

class HomePage extends Component {
  constructor(props, children) {
    super();
    this.props = props;
    this.setState({ count: 0 });
    this.onclick = this.onclick.bind(this);
    this.setParent()
    //console.log(this.parent)

    return this.buildComponenent();
  }

  onclick() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state);
  }

  buildComponenent() {
    const link = createElement(Link, {
      label: "String interpolation",
      url: "/testStringInterpolation",
    });
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
      "+1"
    );

    const displayCount = createElement(
      "div",
      null,
      this.state.count.toString()
    );

    const container = createElement(
      "div",
      null,
      titleText,
      paragraph,
      button,
      displayCount,
      link
    );

    return container;
  }
}
HomePage.prop_types = { title: { type: "string" } };
export default HomePage;
