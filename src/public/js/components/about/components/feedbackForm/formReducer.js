const initState = {
  message: ""
};

module.exports = (state = initState, action) => {
  switch (action.type) {
    case "MESSAGE":
      return Object.assign({}, state, { message: action.value });

    default:
      return state;
  }
};
