const initialState = [];

export default function songs(state = initialState, action) {
  switch (action.type) {
    case 'DELETE':
      return state.filter((id) => id._id !== action.payload);
      case 'UPDATE':
        return state.map((song) => song._id !== action.payload._id ? action.payload : state)
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...state, action.payload];
    default:
      return state;
  }
};