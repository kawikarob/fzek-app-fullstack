import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo2-gray.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { connect } from "react-redux";
import Workout from "../ui/Workout";
import workouts from "../../mock-data/workouts";
import actions from "../../store/actions";

class AllMyWorkouts extends React.Component {
   constructor(props) {
      super(props);

      axios
         .get(
            "https://raw.githubusercontent.com/kawikarob/my-workout-app/master/src/mock-data/workouts.json"
         )
         // res = repsonse
         .then((res) => {
            // handle success
            console.log(res);
            props.dispatch({
               type: actions.STORE_USER_WORKOUTS,
               payload: res.data,
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   logOutCurrentUser() {
      this.props.dispatch({
         type: actions.UPDATE_CURRENT_USER,
         payload: {},
      });
   }

   render() {
      return (
         <div>
            <div className="d-flex" id="wrapper">
               <div className="bg-white border-right" id="sidebar-wrapper">
                  {/* <h1 className="sidebar-heading mb-6 ">FZēK </h1> */}
                  <div className="sidebar-heading">
                     <img src={logo} alt="Logo" className="logo" />
                  </div>
                  <div className="list-group list-group-flush">
                     <Link
                        to="/all-my-workouts"
                        className="list-group-item list-group-item-action bg-white"
                     >
                        <FontAwesomeIcon icon={faDumbbell} className="mr-1" />
                        My Workouts
                     </Link>

                     <div></div>
                     <Link
                        to="/all-exercises"
                        className="list-group-item list-group-item-action bg-white"
                     >
                        <FontAwesomeIcon icon={faThList} className="mr-1" />
                        Exercises
                     </Link>
                  </div>
               </div>

               <div id="page-content-wrapper">
                  <nav className="navbar navbar-expand-lg bg-white border-bottom">
                     <div className="navbar-collapse">
                        <div className="navbar-nav ml-auto mt-2 mt-lg-0">
                           <li className="nav-item">
                              <Link
                                 className="nav-link"
                                 to="/"
                                 onClick={() => {
                                    this.logOutCurrentUser();
                                 }}
                              >
                                 Logout
                              </Link>
                           </li>
                        </div>
                     </div>
                  </nav>
                  <div className="container-fluid">
                     <div className="mt-4 mb-1">
                        <h2>My Workouts</h2>
                     </div>
                     <div className="row">
                        <Link
                           to="create-workout"
                           className="btn btn-sm create-button mt-2 mb-2 ml-4"
                        >
                           <FontAwesomeIcon icon={faPlus} className="mr-1" />
                           New Workout
                        </Link>

                        {/* <Link to="create-workout">
                           <div className="ml-4">
                              <FontAwesomeIcon icon={faPlus} />
                           </div>
                        </Link>
                        <h4 className="ml-2 mt-1">workout</h4> */}
                     </div>
                     {workouts.map((workouts) => {
                        return (
                           <Workout name={workouts.name} key={workouts.id} />
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

// take global state and map to properties in local state
function mapStateToProps(state) {
   return {
      userWorkouts: state.userWorkouts,
   };
}
export default connect(mapStateToProps)(AllMyWorkouts);
