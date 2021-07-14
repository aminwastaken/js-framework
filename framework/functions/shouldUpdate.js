function shouldUpdate(type, props, ...children) {
  if (type !== this.type) return true;
  if (JSON.stringify(this.props) !== JSON.stringify(props)) return true;
  for (let i = 0; i < children.length; i++) {
    return shouldUpdate();
  }
  return false;
}

export default shouldUpdate;
