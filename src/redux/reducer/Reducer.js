export const GET_DETAIL = "GET_DETAIL"
export const POST_DETAIL = "POST_DETAIL"
export const UPDATE_DETAIL = "UPDATE_DETAIL"
export const DELETE_DETAIL = "DELETE_DETAIL"
const initialstate = {
  details: [],
  isResponse: false,
  isUpdateResponse: false,
  isDeleteResponse : false,
 
}

const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return {
        details: action.payload
      };

    case POST_DETAIL:
      return {
        isResponse: action.payload,
      }
    case UPDATE_DETAIL:
      return {
        isUpdateResponse: action.payload,
      }

      case DELETE_DETAIL:
        return {
          isDeleteResponse : action.payload,
        }
    default:
      return state;
  }
}

export default Reducer;