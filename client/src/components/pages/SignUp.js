import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";
import axios from "axios";
import actions from "../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

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

   async setEmailState(emailInput) {
      const lowerCasedEmailInput = emailInput.toLowerCase();
      console.log(lowerCasedEmailInput);
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (emailRegex.test(lowerCasedEmailInput) === false) {
         console.log("Not a valid EMAIl");
         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }
   checkHasLocalPart(passwordInput, emailInput) {
      const localPart = emailInput.split("@")[0];
      if (localPart === "") return false;
      else if (localPart.length < 4) return false;
      else return passwordInput.includes(localPart);
   }

   async setPasswordState(passwordInput, emailInput) {
      console.log(passwordInput);

      const uniqChars = [...new Set(passwordInput)];

      if (passwordInput === "")
         this.setState({
            passwordError: "Please create a password.",
            hasPasswordError: true,
         });
      else if (passwordInput.length < 9) {
         this.setState({
            passwordError: "Your password must be at least 9 characters.",
            hasPasswordError: true,
         });
      } else if (this.checkHasLocalPart(passwordInput, emailInput)) {
         this.setState({
            passwordError:
               "For your safety, your password cannot contain your email address.",
            hasPasswordError: true,
         });
      } else if (uniqChars.length < 3) {
         this.setState({
            passwordError:
               "For your safety, your password must contain at least 3 unique characters.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndCreateUser() {
      //   console.log("VALIDATE ME");
      const emailInput = document.getElementById("login-email-input").value;
      //   console.log(emailInput);
      const passwordInput = document.getElementById("login-password-input")
         .value;
      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            id: getUuid(),
            email: emailInput,
            password: hash(passwordInput),
            createdAt: Date.now(),
         };
         console.log("Created user object", user);
         // Mimic API Presponse:
         axios
            .get(
               "https://raw.githubusercontent.com/kawikarob/my-workout-app/master/src/mock-data/user.json"
            )
            .then((res) => {
               // handle success
               const currentUser = res.data;
               console.log(currentUser);
               this.props.dispatch({
                  type: actions.UPDATE_CURRENT_USER,
                  payload: res.data,
               });
            })
            .catch((error) => {
               // handle error
               console.log(error);
            });
         //redirct user
         this.props.history.push("/all-my-workouts");
      }
   }

   render() {
      return (
         <>
            <div className="background-img">
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
