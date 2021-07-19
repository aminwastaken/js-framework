const routing = (routes) => {
  let location = window.location.pathname;
  for (let route of routes) {
    if (route.path == location) {
      return route.component;   
    }
  }
};

export default routing;
