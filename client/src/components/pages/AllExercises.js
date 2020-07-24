import React from "react";
import { Link } from "react-router-dom";
import Exercise from "../ui/Exercise";
import logo from "../../img/logo2-gray.jpg";
// import exercises from "../../mock-data/exercises";
import actions from "../../store/actions";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";

class AllExercises extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         order: "%60exercises%60.%60name%60%20ASC",
         exercises: [],
         searchTerm: "",
      };
   }

   componentDidMount() {
      this.setExercises();
   }

   setSearchTerm() {
      const searchInput = document.getElementById("search-input").value;
      this.setState({ searchTerm: searchInput }, () => {
         this.setExercises();
      });
   }

   setExercises() {
      axios
         .get(
            `/api/v1/all-exercises?searchTerm=${this.state.searchTerm}&order=${this.state.order}`
         )
         // res = repsonse
         .then((res) => {
            // handle success
            console.log(res.data);
            this.setState({
               exercises: res.data,
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
                                 this.setSearchTerm(e);
                              }}
                           />
                        </div>
                     </div>

                     {this.state.exercises.map((exercises) => {
                        return (
                           <Exercise
                              exercise={exercises.name}
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
