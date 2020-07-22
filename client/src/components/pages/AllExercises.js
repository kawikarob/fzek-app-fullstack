import React from "react";
import { Link } from "react-router-dom";
import Exercise from "../ui/Exercise";
// import exercises from "../../mock-data/exercises";
import orderBy from "lodash/orderBy";
import actions from "../../store/actions";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";

class AllExercises extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         order: '["exercise","asc"]',
         displayedExercises: [],
         allExercises: [],
      };
   }

   componentDidMount() {
      axios
         .get(
            "/api/v1/all-exercises?searchTerm=&order=%60exercises%60.%60name%60%20ASC"
         )
         // res = repsonse
         .then((res) => {
            // handle success
            console.log(res.data);
            const exercises = res.data;
            this.setState({
               displayedExercises: orderBy(exercises, ["exercise", "asc"]),
               allExercises: orderBy(exercises, ["exercise", "asc"]),
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   filterByInput(e) {
      const searchInput = document
         .getElementById("search-input")
         .value.toLowerCase();
      console.log(searchInput);
      const copyOfAllExercises = [...this.state.allExercises];
      console.log(copyOfAllExercises);

      const filteredExercises = copyOfAllExercises.filter((exercise) => {
         const lowerCasedExercise = exercise.exercise.toLowerCase();
         if (lowerCasedExercise.includes(searchInput)) {
            return true;
         } else return false;
      });
      console.log(filteredExercises);
      this.setState({ displayedExercises: filteredExercises }, () => {
         this.setExercises();
      });
   }

   setExercises() {
      const copyOfDisplayedExercises = [...this.state.displayedExercises];
      const toJson = JSON.parse(this.state.order);
      console.log(...toJson);
      const orderedExercises = orderBy(copyOfDisplayedExercises, ...toJson);
      console.log(orderedExercises);
      this.setState({ displayedExercises: orderedExercises });
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
                  <h1 className="sidebar-heading mb-6">FZēK </h1>
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
                              <Link
                                 className="nav-link"
                                 to="/"
                                 // onClick={() => {
                                 //    this.logOutCurrentUser();
                                 // }}
                              >
                                 Logout
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </nav>
                  <div className="container-fluid">
                     <div className="row mt-4 mb-1">
                        <div className="col-8">
                           <h2>Exercises</h2>
                        </div>
                        <div className="col-4">
                           <input
                              type="text"
                              className="form-control border"
                              placeholder="Search for exercise"
                              id="search-input"
                              onChange={(e) => {
                                 this.filterByInput(e);
                              }}
                           />
                        </div>
                     </div>

                     {this.state.displayedExercises.map((exercises) => {
                        return (
                           <Exercise
                              exercise={exercises.exercise}
                              muscles={exercises.muscles}
                              url={exercises.url}
                              key={exercises.id}
                           />
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default AllExercises;
