import Component from "../framework/Component.js";
import createElement from "../framework/functions/createElement.js";

class TypeCheckComponent extends Component {
    constructor(props, children) {
        super();
        this.props = props;
        return this.buildComponenent();
    }


    buildComponenent() {

        const container = createElement("div", null, "");
        return container;
    }
}
TypeCheckComponent.prop_types = {title: {type: "number"}};
export default TypeCheckComponent;
