import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { v4 as getUuid } from "uuid";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import landingLogo from "../../img/logo2-wht-blk.jpg";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import actions from "../../store/actions";
import axios from "axios";
// import { bindActionCreators } from "redux";

class SignUp extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         isDisplayingInputs: true,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }
   ShowInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   async validateAndCreateUser() {
      //   console.log("VALIDATE ME");
      const emailInput = document.getElementById("login-email-input").value;
      //   console.log(emailInput);
      const passwordInput = document.getElementById("login-password-input")
         .value;
      {
         // create user obj
         const user = {
            id: getUuid(),
            email: emailInput,
            password: passwordInput,
            createdAt: Date.now(),
         };
         console.log("Created user object", user);
         // post to API
         axios
            .post("/api/v1/users", user)
            .then((res) => {
               console.log(res.data);
               this.props.dispatch({
                  type: actions.UPDATE_CURRENT_USER,
                  payload: res.data,
               });
               this.props.history.push("/all-my-workouts");
            })
            .catch((err) => {
               const { data } = err.response;
               console.log(data);
               const { emailError, passwordError } = data;
               if (emailError !== "") {
                  this.setState({ hasEmailError: true, emailError });
               } else {
                  this.setState({ hasEmailError: false, emailError });
               }
               if (passwordError !== "") {
                  this.setState({ hasPasswordError: true, passwordError });
               } else {
                  this.setState({ hasPasswordError: false, passwordError });
               }
            });

         // post to API
         // update current user
         // go to next page: this.props.history.push("/all-my-workouts");

         //redirct user
         // this.props.history.push("/all-my-workouts");
      }
   }

   render() {
      return (
         <>
            <div className="background-img">
               <img
                  src={landingLogo}
                  className="landing-logo"
                  alt="Landing Logo"
               />
               <div className="login-box">
                  <h2>Sign Up</h2>
                  {this.state.isDisplayingInputs && (
                     <>
                        <div className="textbox">
                           <div className="row">
                              <div className="ml-5">
                                 <FontAwesomeIcon icon={faEnvelope} />
                              </div>
                              <div>
                                 <input
                                    type="email"
                                    placeholder="Email"
                                    className={classnames({
                                       "form-control": false,
                                       "is-invalid": this.state.hasEmailError,
                                    })}
                                    id="login-email-input"
                                 />
                              </div>
                           </div>
                        </div>
                        {this.state.hasEmailError && (
                           <div className="text-danger">
                              {this.state.emailError}
                           </div>
                        )}
                        <div className="textbox ">
                           <div className="row">
                              <div className="ml-5">
                                 <FontAwesomeIcon icon={faLock} />
                              </div>
                              <div>
                                 <input
                                    type="password"
                                    placeholder="Password"
                                    className={classnames({
                                       "form-control": false,
                                       "is-invalid": this.state
                                          .hasPasswordError,
                                    })}
                                    id="login-password-input"
                                 />
                              </div>
                           </div>
                        </div>
                        <span className="ml-6">
                           Must be at least 9 characters
                        </span>
                        {this.state.hasPasswordError && (
                           <div className="text-danger">
                              {this.state.passwordError}
                           </div>
                        )}

                        <div>
                           <button
                              className="btn landing-button mt-4"
                              onClick={() => {
                                 this.validateAndCreateUser();
                              }}
                           >
                              Login
                           </button>
                        </div>
                        <div>
                           <br></br>
                           <Link to="/">
                              <p>Already a member? Login</p>
                           </Link>
                        </div>
                     </>
                  )}
               </div>
            </div>
         </>
      );
   }
}
// take global state and map to properties in local state
function mapStateToProps(state) {
   return {};
}

export default withRouter(connect(mapStateToProps)(SignUp));
