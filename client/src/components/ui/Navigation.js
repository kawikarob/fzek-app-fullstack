import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
   return (
      <div>
         <div class="d-flex" id="wrapper">
            <div class="bg-white border-right" id="sidebar-wrapper">
               <h1 class="sidebar-heading mb-6">FZēK </h1>
               <div class="list-group list-group-flush">
                  <Link
                     to="all-my-workouts"
                     className="list-group-item list-group-item-action bg-white"
                  >
                     <FontAwesomeIcon icon={faDumbbell} className="mr-1" />
                     My Workouts
                  </Link>

                  <div></div>
                  <Link
                     to="all-exercises"
                     className="list-group-item list-group-item-action bg-white"
                  >
                     <FontAwesomeIcon icon={faThList} className="mr-1" />
                     Exercises
                  </Link>
               </div>
            </div>

            <div id="page-content-wrapper">
               <nav class="navbar navbar-expand-lg bg-white border-bottom">
                  <div class="navbar-collapse">
                     <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                           <a class="nav-link" href="/">
                              Logout
                           </a>
                        </li>
                     </ul>
                  </div>
               </nav>
               {/* <div class="container-fluid">
                  <div className="row mt-4 mb-2">
                     <div className="col-8"></div>
                     <div className="col-4">
                        <input
                           type="text"
                           className="form-control border"
                           placeholder="Search for exercise"
                        />
                     </div>
                  </div>
               </div> */}
            </div>
         </div>
      </div>
   );
}
