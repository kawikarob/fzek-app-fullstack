import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import userWorkouts from "./reducers/userWorkouts";

export default combineReducers({
   // key and value the same
   // cureentUser : currentUser same as just currentUser
   currentUser,
   userWorkouts,
});
