import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { checkIsOver, MAX_CHARS } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";

export default class CreateWorkout extends React.Component {
   constructor() {
      super();

      this.state = {
         createWorkoutText: "",
      };
   }

   checkHasInvalidCharCount() {
      if (
         this.state.createWorkoutText.length > MAX_CHARS ||
         this.state.createWorkoutText.length === 0
      ) {
         return true;
      } else {
         return false;
      }
   }

   setCreateWorkoutText(e) {
      console.log(e.target, e.target.value);
      this.setState({ createWorkoutText: e.target.value });
   }

   render() {
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
                     <div className="mt-4 mb-1">
                        <h2>Create Workout</h2>
                     </div>
                     <div className="mb-3">
                        <div className="card bg-white border border-primary">
                           <div className="card-body">
                              <textarea
                                 className="d-none d-sm-block"
                                 autoFocus={true}
                                 onChange={(e) => this.setCreateWorkoutText(e)}
                              ></textarea>
                           </div>
                        </div>
                     </div>
                     <div className="float-right mb-2">
                        <span
                           className={classnames({
                              "text-danger": checkIsOver(
                                 this.state.createWorkoutText,
                                 MAX_CHARS
                              ),
                           })}
                        >
                           {this.state.createWorkoutText.length}
                        </span>
                        /{MAX_CHARS}
                     </div>
                     <div className="clearfix"></div>
                     <Link
                        to="all-my-workouts"
                        className={classnames(
                           "btn btn-outline-primary float-right",
                           {
                              disabled: this.checkHasInvalidCharCount(),
                           }
                        )}
                     >
                        Create
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
