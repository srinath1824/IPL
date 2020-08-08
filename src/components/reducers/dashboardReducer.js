import types from "../actions";

const initialState = {
  teamSelected: "",
  team: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TEAM_SELECT: {
      return {
        ...state,
        teamSelected: action.data
      };
    }
    case types.SELECT_TEAM: {
      return {
        ...state,
        team: action.data
      };
    }
    case types.LOADING_PAGE: {
      return {
        ...state,
        loading: action.data
      };
    }
  }
  return state;
};
