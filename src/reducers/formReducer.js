const initialState = {
  subgenre: '',
  newSubgenreName: '',
  isNewSubgenreDescriptionRequired: false,
  showBookAdded: false,
};

const formReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "setSubgenre": {
      return { ...state, subgenre: payload };
    }
    case "setShowBookAdded": {
      return { ...state, showBookAdded: payload };
    }
    default:
      throw new Error();
  };
}

export { formReducer, initialState };