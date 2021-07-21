import Component from "../framework/Component.js";
import createElement from "../framework/functions/createElement.js";

class StringInterpolationComponent extends Component {
    constructor(props, children) {
        super();
        this.testObject = { // pour testStringInterpolation
            value1: 1,
            key: {
                value2: 2
            }
        };
        this.props = props;
        return this.buildComponenent();
    }

    buildComponenent() {

        // const container = createElement(
        //     "p",
        //     null,
        //     "The object has values {{ value1 }} and {{ key.value2 }} but does not have {{ value3 }}.".interpolate(this.testObject)
        // );
        const container = createElement(
            "p",
            null,
            "The object has values {{ value1 }} and {{ key.value2 }}.".interpolate(this.testObject)
        );
        return container;
    }
}

export default StringInterpolationComponent;
