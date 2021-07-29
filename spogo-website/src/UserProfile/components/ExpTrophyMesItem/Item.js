import React, { useEffect, useState } from "react";
import "./Item.css";
import CrownIcon from "mdi-react/CrownIcon";
import TrophyIcon from "mdi-react/TrophyIcon";
import RocketLaunchIcon from "mdi-react/RocketLaunchIcon";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DescriptionScreen from "../../screens/DescriptionScreen/DescriptionScreen";
import { useHistory } from "react-router-dom";
import { MixpanelConsumer } from "react-mixpanel";
import {
  getExperienceArray,
  getTrophyArray,
  getMeasurableArray,
} from "../../../ProfileData";

const Item = (props) => {
  let icon = props.iconName;
  let color = props.color;
  let title = props.title;
  let team = props.team;
  let time = props.time;
  let description = props.description;
  let idNum = props.idNum;
  let UID = props.userUID;

  const [iconToHeaderName, setIconToHeaderName] = useState("");

  const [specificItemArray, setSpecificArray] = useState([]);

  const getSpecificArray = () => {
    if (icon === "crown") {
      setSpecificArray(getExperienceArray());
    } else if (icon === "trophy") {
      setSpecificArray(getTrophyArray());
    } else {
      setSpecificArray(getMeasurableArray());
    }
  };

  useEffect(() => {
    findSize();
    getSpecificArray();
  }, []);

  let ItemIcon = (props) => {
    let iconType = props.iconType;
    if (iconType === "trophy") {
      setIconToHeaderName("Accomplishment");
      return <TrophyIcon color={color} size={iconSize} />;
    } else if (iconType === "crown") {
      setIconToHeaderName("Experience");
      return <CrownIcon color={color} size={iconSize} />;
    } else {
      setIconToHeaderName("Measurable");
      return <RocketLaunchIcon color={color} size={iconSize} />;
    }
  };

  const [iconSize, setIconSize] = useState(25);

  const findSize = () => {
    if (window.innerWidth < 600) {
      setIconSize(25);
    } else if (window.innerWidth < 1200) {
      setIconSize(25);
    } else {
      setIconSize(25);
    }
  };

  return (
    <MixpanelConsumer>
      {(mixpanel) => (
        <>
          {window.innerWidth < 600 ? (
            <Link
              onClick={() =>
                mixpanel.track("Specific Item Type Pressed", {
                  Item: iconToHeaderName,
                })
              }
              to={
                icon != "rocket-launch"
                  ? {
                      pathname: `/descriptions/${UID}`,
                      state: {
                        icon: icon,
                      },
                    }
                  : `/users/${UID}`
              }
              className="Link"
            >
              <div className="Container">
                <div className="itemIconContainer">
                  <ItemIcon iconType={icon} />
                </div>
                <div className="TextContainer">
                  <h1>{title}</h1>
                  {team != undefined && team != null && team != "" && (
                    <h2>{team}</h2>
                  )}
                  <h3>{time}</h3>
                  <h4>{description}</h4>
                  {(idNum === 0 && specificItemArray.length === 1) ||
                  idNum === specificItemArray.length - 1 ? (
                    <hr size="1" color="white" className="Divider" />
                  ) : (
                    <hr size="1" color="lightgrey" className="Divider" />
                  )}
                </div>
              </div>
            </Link>
          ) : (
            <div
              className="Container"
              onClick={() =>
                mixpanel.track("Specific Item Type Pressed", {
                  Item: iconToHeaderName,
                })
              }
            >
              <div className="itemIconContainer">
                <ItemIcon iconType={icon} />
              </div>
              <div className="TextContainer">
                <h1>{title}</h1>
                {team != undefined && team != null && team != "" && (
                  <h2>{team}</h2>
                )}
                <h3>{time}</h3>
                <h4>{description}</h4>
                {(idNum === 0 && specificItemArray.length === 1) ||
                idNum === specificItemArray.length - 1 ? (
                  <hr size="1" color="white" className="Divider" />
                ) : (
                  <hr size="1" color="lightgrey" className="Divider" />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </MixpanelConsumer>
  );
};

export default Item;
