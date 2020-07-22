import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Workout(props) {
   return (
      <div>
         <ul className="list-group mt-1">
            <li className="list-group-item">
               <div>
                  <div className="float-left">
                     <Link to={`/${props.name}/workout`}>
                        <h3>{props.name}</h3>
                     </Link>
                  </div>
                  <div className="float-right text-muted">
                     <FontAwesomeIcon icon={faTrashAlt} />
                  </div>
               </div>
               {/* <div className="clearfix"></div>
               <div>
                  <h5 className="mb-1">{props.muscles}</h5>
               </div> */}
            </li>
         </ul>
      </div>
   );
}
