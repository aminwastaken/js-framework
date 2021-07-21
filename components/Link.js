import App from "../App.js";
import Component from "../framework/Component.js";
import createElement from "../framework/functions/createElement.js";
import render from "../framework/functions/render.js";

class Link extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.onclick = this.onclick.bind(this);
    this.setParent();

    return this.buildComponent();
  }

  onclick() {
    window.history.pushState(null, "myLink", this.props?.url);
    render(createElement(this.parent), document.getElementById("root"), true);
  }

  buildComponent() {
    return createElement("a", { onclick: this.onclick }, this.props?.label);
  }
}

export default Link;
