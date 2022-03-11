import React, { useState } from "react";
import "./JoinWaitlistScreen.css";
import firebase from "../../../firebase";
import { MixpanelConsumer } from "react-mixpanel";
import { useHistory } from "react-router-dom";

const JoinWaitlistScreen = () => {
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  let history = useHistory();

  let validator = require("email-validator");

  const validateEmail = () => {
    if (validator.validate(email)) {
      addUserToWaitlist();
      <MixpanelConsumer>
        {(mixpanel) => mixpanel.track("Waitlist User Added")}
      </MixpanelConsumer>;
      history.push("/");
    } else {
      setInvalidEmail(true);
    }
  };

  const addUserToWaitlist = async () => {
    await firebase
      .app("secondary")
      .auth()
      .createUserWithEmailAndPassword(email, "password")
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <div className="joinWaitlistScreenContainer">
        <div className="joinWaitlistContainer">
          <div className="waitlistFormContainer">
            <h1 className="waitlistFormHeader">Join Waitlist</h1>
            <p className="waitlistHeadlineHeader">
              Receive updates about new features and our marketplace.
            </p>
            <form>
              <div className="waitlistInputForms">
                <p
                  className="waitlistTextInputHeader"
                  style={{ marginTop: "8%" }}
                >
                  Name
                </p>
                <input className="waitlistTextInput" required type="name" />
                <p className="waitlistTextInputHeader">Email</p>
                <input
                  className="waitlistTextInput"
                  required
                  autoCapitalize="none"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(text) => {
                    setEmail(text.target.value);
                    setInvalidEmail(false);
                  }}
                />
                {invalidEmail && (
                  <h1 className="waitlistInvalidText">Invalid Email</h1>
                )}
              </div>
              <button
                className="joinWaitlistButton"
                type="button"
                style={{ marginTop: 15 }}
                onClick={() => {
                  validateEmail();
                }}
              >
                Join Waitlist
              </button>

              {/* <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <hr style={{ marginTop: 20, width: "45%" }} />
                <p style={{ fontSize: 14, marginTop: 20 }}>or</p>
                <hr style={{ marginTop: 20, width: "45%" }} />
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlistScreen;
