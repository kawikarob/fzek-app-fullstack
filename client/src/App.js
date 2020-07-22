import React from "react";
import "./style/master.scss"; // appplies global scss styles
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import SignUp from "./components/pages/SignUp";
import AllMyWorkouts from "./components/pages/AllMyWorkouts";
import MyWorkout from "./components/pages/MyWorkout";
import ShouldersWorkout from "./components/pages/ShouldersWorkout";
import AllExercises from "./components/pages/AllExercises";
import CreateWorkout from "./components/pages/CreateWorkout";

import NotFound from "./components/pages/NotFound";

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/all-my-workouts" component={AllMyWorkouts} />
            {/* :workout = var */}
            <Route exact path="/:workout/workout" component={MyWorkout} />
            <Route
               exact
               path="/shoulders-workout"
               component={ShouldersWorkout}
            />
            <Route exact path="/all-exercises" component={AllExercises} />
            <Route exact path="/create-workout" component={CreateWorkout} />

            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
