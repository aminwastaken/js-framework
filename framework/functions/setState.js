// import render from "./render";

const setState = function (newState) {
  if (this.state != newState) {
    this.state = newState;
    // render(this,document.getElementById("root"),true)
  }
};

export default setState;
