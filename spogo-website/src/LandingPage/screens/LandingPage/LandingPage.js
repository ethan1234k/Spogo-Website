import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import Header from "../../components/Header/Header";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Mockup from "./mockup.png";
import ProfileFeatureGraphic from './Profile-LP-Graphic.jpg'
import ProfileGraphic from './profile-graphic.png'
import GirlWithTrophyGraphic from "./girlwithtrophy.png";
import ShowcaseYourselfGraphic from "./showcaseyourselfbaseballplayer.png";
import SocialMediaIntegrationGraphic from "./socialmediaintegration.png";
import TailoredCustomizationGraphic from "./tailoredcustomization.png";
import firebase from "../../../firebase";
import { MixpanelConsumer } from "react-mixpanel";
import Footer from "../../components/Footer/Footer";
import WebFont from "webfontloader";

const LandingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [waitlistInputValid, setWaitlistInputValid] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [waitlistAddSuccessful, setWaitlistAddSuccessful] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Open Sans", "Public Sans"],
      },
    });
  }, []);

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
    <MixpanelConsumer>
      {(mixpanel) => (
        <>
          <Header onClick={window.scrollTo(0, 0)} />
          <div className="landingPageBody">
            <div className="topLandingPageContentBannerContainer" style={{backgroundColor: 'whitesmoke'}}>
              <div className="landingPageWaitlistContentContainer" style={{paddingTop: 90}}>
                <h1>
                  The New Way To Market and Monetize Your Name, Image, And
                  Likeness Is Here.
                </h1>
                <p>Find Out More.</p>
                <div className="landingPageTopButtonsContainer">
                  <div className="waitlistButton">
                    <button
                      type="button"
                      onClick={() => {
                        window.location.assign("/auth/sign-up");
                        mixpanel.track("Main Content Button Press", {
                          "Button Type": "Build Profile",
                        });
                      }}
                      style={{ marginBottom: "2%" }}
                    >
                      Start building your Profile
                    </button>
                  </div>
                  <Link
                    to="/waitlist"
                    className="waitlistButton"
                    onClick={() =>
                      mixpanel.track("Main Content Button Press", {
                        "Button Type": "Waitlist",
                      })
                    }
                  >
                    <button type="button">Join Waitlist</button>
                  </Link>
                </div>
              </div>
              <div className="landingPageTopImageMockupContainer" style={{paddingLeft: 20}}>
                <img src={ProfileFeatureGraphic} alt="Phone Mockup"/>
                {/* <img src={ProfileGraphic} alt="Phone Mockup" /> */}
              </div>
            </div>
            <div className="mainProductHeader">
              <h1>This is Spogo.</h1>
              <p className="mainProductHeaderSubtitle">
                Spogo is the premier platform to market and monetize your name,
                image, and likeness. Whether it is finding opportunities or
                sharing content, every athlete has something to do on Spogo. So
                as you continue along your athletic journey, Spogo will be right
                there with you.{" "}
              </p>
              <img
                className="mainProductHeaderImage"
                src={GirlWithTrophyGraphic}
                alt="data"
              />
            </div>
            <div className="productDescriptionContainer">
              <div className="productDescription">
                <h1>Showcase Yourself</h1>
                <h2>
                  It has never been easier to showcase your athletic profile.
                  With Spogo, you can link all your social media’s, post
                  highlights, list experiences, show off accomplishments,
                  display measurables, and receive testimonials. To help you
                  best stand out, we provide a multitude of customization
                  options that allow you to create a profile curated to your
                  preferences and personality. Once you’ve completed your
                  profile, generate and share your unique Spogo URL for everyone
                  to see.
                </h2>
              </div>
              <div className="productDescription">
                <img
                  className="productBigImage"
                  src={ShowcaseYourselfGraphic}
                />
              </div>
            </div>
            <div className="productDescriptionContainerInverted">
              <div className="productDescription">
                <img
                  className="productBigImage"
                  src={SocialMediaIntegrationGraphic}
                />
              </div>
              <div className="productDescription">
                <h1>Find Opportunities</h1>
                <h2>
                  At Spogo, we understand that as an athlete you want to
                  maximize your value. We know that finding monetizable
                  opportunities can be difficult and time consuming. That’s why
                  we’ve built an all in one marketplace to link you to your next
                  partnership. Through our simple platform, you can search,
                  apply, and get connected to your next opportunity in just a
                  few clicks.
                </h2>
              </div>
            </div>
            <div className="productDescriptionContainer">
              <div className="productDescription">
                <h1>Get Noticed</h1>
                <h2>
                  Spogo provides a unique way to generate exposure and grow your
                  brand through an innovative public, private, and trending feed
                  concept. Since the public feed is the first feed you see, you
                  can generate impressions with your athletic content and find
                  people you never knew existed. With the private feed, catch up
                  and interact with those you know best. On our trending page,
                  explore what’s going viral. With Spogo, it could even be you!
                </h2>
              </div>
              <div className="productDescription">
                <img
                  className="productBigImage"
                  src={TailoredCustomizationGraphic}
                />
              </div>
            </div>
            {/* <div className="productDescriptionContainerInverted">
          <div className="productDescription">
            <img className="productBigImage" src={LinkInBioGraphic} />
          </div>
          <div className="productDescription">
            <h1>Use it Anywhere</h1>
            <h2>
              Once you’ve completed your profile, generating your unique URL is effortless. You can paste it on all your social media’s for anyone to view. In addition, send it to coaches, recruiters, teams, agents, and whoever else you have in mind. With Spogo, marketing hasn’t been easier.
            </h2>
          </div>
        </div> */}
            {/* Bottom Part */}
            <Footer onClick={window.scrollTo(0, 0)} />
          </div>
        </>
      )}
    </MixpanelConsumer>
  );
};

export default LandingPage;
