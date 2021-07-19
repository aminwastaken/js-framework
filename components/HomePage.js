import Component from "../framework/Component.js";
import createElement from "../framework/functions/createElement.js";
import render from "../framework/functions/render.js";

class HomePage extends Component {
  constructor(props, children) {
    super();
    this.props = props;
    this.setState({ count: 0 });
    this.onclick = this.onclick.bind(this);
    // this.buildComponenent = this.buildComponenent.bind(this);
    return this.buildComponenent();
  }

  onclick() {
    this.setState({count: this.state.count+1}); 
    console.log(this.state);
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

    const counter = createElement(
      "button",
      {
        onclick: this.onclick()
      },
      "+1"
    );

    const displayCount = createElement(
      "div",
      null,
      (this.state.count).toString()
    );

    const container = createElement(
      "div",
      null,
      titleText,
      paragraph,
      button,
      counter,
      displayCount
    );
    return container;
  }
}
HomePage.prop_types = {title: {type: "string"}};
export default HomePage;
