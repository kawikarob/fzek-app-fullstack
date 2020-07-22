import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Exercise(props) {
   // const testExercise = props.exercises.map((exercise) => {
   //    // map through techInterestedIn, return value of "name" key
   //    // TODO add comma if there are more technologies listed
   //    // add period if tech.name is last in list
   //    // slice?
   //    return exercise.name;
   // });

   return (
      <div>
         <ul className="list-group mt-1">
            <li className="list-group-item">
               <div>
                  <div className="float-left">
                     <a href={props.url}>
                        <h3>{props.exercise}</h3>
                     </a>
                  </div>
                  <div className="row">
                     <div className="ml-auto">
                        <select className="custom-select custom-select-sm">
                           <option value>add to</option>
                           <option value="1">Chest</option>
                           <option value="2">Shoulders</option>
                           {/* <option value="3">Back</option>
                           <option value="4">Abs</option>
                           <option value="5">Legs</option> */}
                        </select>
                     </div>
                     <div className="ml-2">
                        <FontAwesomeIcon icon={faPlus} />
                     </div>
                  </div>
               </div>
               <div className="clearfix"></div>
               <div>
                  <h5 className="mb-1">{props.muscles}</h5>
               </div>
            </li>
         </ul>
      </div>
   );
}
