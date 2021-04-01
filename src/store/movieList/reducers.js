const initialState = {
  data: [],
  currentPage: 1,
  totalPages: 0,
};

function movieListReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export { movieListReducer };
