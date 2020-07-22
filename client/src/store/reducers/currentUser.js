import actions from "../actions";

// actions have type and payloads
// if its this type -> then do this payload
export default function currentUser(currentUser = {}, action) {
   switch (action.type) {
      case actions.UPDATE_CURRENT_USER:
         return action.payload;
      default:
         return currentUser;
   }
}
