import React from "react";
import { Link } from "react-router-dom";
import workouts from "../../mock-data/workouts";
import MyExercise from "../ui/MyExercise";
import axios from "axios";
import actions from "../../store/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";

class MyWorkout extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         workouts: workouts,
      };

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

   render() {
      const myworkout = this.props.match.params.workout;
      return (
         <div>
            <div className="d-flex" id="wrapper">
               <div className="bg-white border-right" id="sidebar-wrapper">
                  <h1 className="sidebar-heading mb-6 ">FZēK </h1>
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
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                           <li className="nav-item">
                              <a className="nav-link" href="/">
                                 Logout
                              </a>
                           </li>
                        </ul>
                     </div>
                  </nav>
                  <div className="container-fluid">
                     <div className="row mt-4 mb-1">
                        <div className="col-8">
                           <h2>{myworkout}</h2>
                        </div>

                        {/* <div className="col-4">
                           <input
                              type="text"
                              className="form-control border"
                              placeholder="Search for exercise"
                           />
                        </div> */}
                     </div>

                     {this.state.workouts.map((workout) =>
                        workout.exercises
                           .filter((exercise) => {
                              return exercise.muscles.includes(myworkout);
                           })
                           .map((exercises) => (
                              <MyExercise
                                 exercise={exercises.exercise}
                                 key={exercises.id}
                                 muscles={exercises.muscles}
                                 url={exercises.url}
                              />
                           ))
                     )}
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
export default connect(mapStateToProps)(MyWorkout);
