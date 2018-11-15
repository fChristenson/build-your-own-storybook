function createElement(j) {
  return function(component, props, ...children) {
    const finalProps = Object.assign(props || {}, { children });
    return component(finalProps, j);
  }
}

function arrayEquals(array1, array2) {
  if (array1 === array2) return true;
  if (array1 === null || array2 === null) return false;
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

module.exports = {
  createElement: createElement,
  arrayEquals: arrayEquals
};