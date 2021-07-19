import createElement from "./createElement.js";

const routing = (routes) => {
    let location = window.location.pathname;
    for (let route of routes) {
        if (route.path == location) {
            return typeof route.component === "function" ? createElement(route.component) : route.component;
        }
    }
};

export default routing;
