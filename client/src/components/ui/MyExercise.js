import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import exercises from "../../mock-data/exercises";

export default function MyExercise(props) {
   return (
      <div>
         <h2>{props.name}</h2>
         <ul className="list-group mt-1">
            <li className="list-group-item">
               <div>
                  <div className="float-left">
                     <a href={props.url}>
                        <h3>{props.exercise}</h3>
                     </a>
                  </div>
               </div>
               <div className="float-right">
                  <FontAwesomeIcon icon={faTimes} />
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
