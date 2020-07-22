import React from "react";
import { Link } from "react-router-dom";
// import Workout from "../ui/Workout";
import Exercise from "../ui/Exercise";
import exercise from "../../mock-data/exercises";

export default function MyWorkoutShoulders() {
   return (
      <div>
         <div class="d-flex" id="wrapper">
            <div class="bg-light border-right-0" id="sidebar-wrapper">
               <h1 class="sidebar-heading mb-6 text-center">FZēK </h1>
               <div class="list-group list-group-flush">
                  <Link
                     to="all-my-workouts"
                     class="list-group-item list-group-item-action bg-light"
                  >
                     My Workouts
                  </Link>
                  <Link
                     to="all-exercises"
                     class="list-group-item list-group-item-action bg-light"
                  >
                     Exercises
                  </Link>
               </div>
            </div>

            <div id="page-content-wrapper">
               <nav class="navbar navbar-expand-lg bg-light border-bottom-0">
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
               <div class="container-fluid">
                  <div className="row mt-4 mb-1">
                     <div className="col-8">
                        <h2>Shoulders</h2>
                     </div>
                     {/* <div className="col-4">
                        <input
                           type="text"
                           className="form-control border"
                           placeholder="Search for exercise"
                        />
                     </div> */}
                  </div>
                  {exercise.map((exercises) => {
                     return (
                        <Exercise
                           exercise={exercises.exercise}
                           muscles={exercises.muscles}
                           url={exercises.url}
                           key={exercises.id}
                        />
                     );
                  })}

                  {/* <div class="list-group">
                     <a
                        href="https://www.jefit.com/exercises/10/Barbell-Shoulder-Press"
                        class="list-group-item list-group-item-action"
                     >
                        <h3>Barbell Shoulder Press</h3>
                        <h5>main muscle group: shoulders</h5>
                     </a>
                     <a
                        href="https://www.jefit.com/exercises/873/Cable-External-Rotation"
                        class="list-group-item list-group-item-action"
                     >
                        <h3>Cable External Rotation</h3>
                        <h5>main muscle group: shoulders</h5>
                     </a>
                     <a
                        href="https://www.jefit.com/exercises/1127/Cable-One-Arm-Lateral-Raise"
                        class="list-group-item list-group-item-action"
                     >
                        <h3>Cable One Arm Lateral Raise</h3>
                        <h5>main muscle group: shoulders</h5>
                     </a>
                     <a
                        href="https://www.jefit.com/exercises/13/Barbell-Up-Right-Row"
                        class="list-group-item list-group-item-action"
                     >
                        <h3>Barbell Up Right Row</h3>
                        <h5>main muscle group: shoulders</h5>
                     </a>
                     <a
                        href="https://www.jefit.com/exercises/878/Machine-Reverse-Flyes"
                        class="list-group-item list-group-item-action "
                     >
                        <h3>Machine Reverse Flyes</h3>
                        <h5>main muscle group: shoulders</h5>
                     </a>
                  </div> */}
               </div>
            </div>
         </div>
      </div>
   );
}
