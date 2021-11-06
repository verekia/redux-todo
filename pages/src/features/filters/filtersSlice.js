export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
};

const initialState = { status: StatusFilters.All };

function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filter/statusFilterChanged': {
      return {
        ...state,
        status: action.payload,
      };
    }

    default:
      return state;
  }
}

export default filtersReducer;
