import React from "react";
import shoulder from "../../img/shoulder.jpg";

export default function Card() {
   return (
      <div>
         <div className="row">
            <div className="col-md-4 col-sm-6">
               <div
                  class="card border-primary mb-6"
                  style={{ maxWidth: "300px" }}
               >
                  <div class="row no-gutters">
                     <div class="col-md-4 card-img-top">
                        <img src={shoulder} class="card-img " alt="" />
                     </div>
                     <div class="col-md-8">
                        <div class="card-body">
                           <h5 class="card-title my-3">Shoulder</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-md-4 col-sm-6">
               <div
                  class="card border-primary mb-3"
                  style={{ maxWidth: "300px" }}
               >
                  <div class="row no-gutters">
                     <div class="col-md-4 card-img-top">
                        <img src={shoulder} class="card-img " alt="" />
                     </div>
                     <div class="col-md-8">
                        <div class="card-body">
                           <h5 class="card-title my-3">Shoulder</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-4 col-sm-6">
               <div
                  class="card border-primary mb-3"
                  style={{ maxWidth: "300px" }}
               >
                  <div class="row no-gutters">
                     <div class="col-md-4 card-img-top">
                        <img src={shoulder} class="card-img " alt="" />
                     </div>
                     <div class="col-md-8">
                        <div class="card-body">
                           <h5 class="card-title my-3">Shoulder</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-md-4 col-sm-6">
               <div
                  class="card border-primary mb-3"
                  style={{ maxWidth: "300px" }}
               >
                  <div class="row no-gutters">
                     <div class="col-md-4 card-img-top">
                        <img src={shoulder} class="card-img " alt="" />
                     </div>
                     <div class="col-md-8">
                        <div class="card-body">
                           <h5 class="card-title my-3">Shoulder</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
