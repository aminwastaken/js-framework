import Component from "../framework/Component.js";

class HomePage extends Component {
  constructor() {
    super();
    return this.buildComponenent();
  }

  onclick(event) {
    alert("it's working");
  }

  buildComponenent() {
    const titleText = this.createElement(
      "h1",
      { name: "myTitle" },
      "hello world"
    );
    const paragraph = this.createElement(
      "p",
      { name: "pragraph" },
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi metus. Suspendisse ac placerat nisi. Pellentesque eros augue."
    );

    const button = this.createElement(
      "button",
      {
        onclick: this.onclick,
        name: "im just a string",
      },
      "click me "
    );
    const container = this.createElement(
      "div",
      null,
      titleText,
      paragraph,
      button
    );
    return container;
  }
}

export default HomePage;
