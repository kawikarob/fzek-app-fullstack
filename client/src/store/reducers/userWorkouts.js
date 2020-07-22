import actions from "../actions";

// actions have type and payloads
// if its this type -> then do this payload
export default function userWorkouts(state = [], action) {
   switch (action.type) {
      case actions.STORE_USER_WORKOUTS:
         return action.payload;
      default:
         return state;
   }
}
