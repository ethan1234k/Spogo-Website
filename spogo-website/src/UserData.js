import React, {useState, useEffect} from 'react';

let userInfoDict = {};
let videoItemArray = [];
let experienceItemArray = [];
let experienceItemCurrentId = 0;
let trophyItemArray = [];
let trophyItemCurrentId = 0;
let measurableItemArray = [];
let measurableItemCurrentId = 0;
let videoImageCurrentId = 0;

function experienceCardObject(title, team, duration, description, idNum) {
  this.title = title;
  this.team = team;
  this.duration = duration;
  this.description = description;
  this.idNum = idNum;
}

function trophyCardObject(title, duration, description, idNum) {
  this.title = title;
  this.duration = duration;
  this.description = description;
  this.idNum = idNum;
}

function MeasurableCardObject(title, value, idNum) {
  this.title = title;
  this.value = value;
  this.idNum = idNum;
}

export const clearAllData = () => {
  experienceItemCurrentId = 0;
  trophyItemCurrentId = 0;
  measurableItemCurrentId = 0;
  videoImageCurrentId = 0;
  userInfoDict = {};
  experienceItemArray = [];
  trophyItemArray = [];
  measurableItemArray = [];
  videoItemArray = [];
};

// let userUID = ""

// export const setUserUID = (userUID) => {
//   userUID = this.userUID
// }

// export const getUserUID =;

export const addUserInfo = (key, value) => {
  userInfoDict[key] = value;
};

export const getUserInfo = key => {
  let value = null;
  if (userInfoDict[key] != null) {
    value = userInfoDict[key];
  }
  return value;
};

export const getUserDict = () => {
  return userInfoDict;
};

export const setUserDict = infoDict => {
  userInfoDict = infoDict;
  userInfoDict = userInfoDict['userArray'];
};

//Experience
export const addExperienceItem = (title, team, duration, description, idNum) => {
  if (title != '' && duration != '') {
    const CardObjectExample = new experienceCardObject(
      title,
      team,
      duration,
      description,
      idNum,
    );
    experienceItemArray.push(CardObjectExample);
    experienceItemCurrentId++;
  }
};

export const getExperienceArray = () => {
  return experienceItemArray;
};

export const deleteExperienceItem = index => {
  experienceItemArray.splice(index, 1);
  for (let i = index; i < experienceItemArray.length; i++) {
    experienceItemArray[i].idNum = experienceItemArray[i].idNum - 1;
  }
  if (experienceItemCurrentId > 0) {
    experienceItemCurrentId--;
  }
};

export const editExperienceItem = (title, team, duration, description, index) => {
  experienceItemArray[index].title = title;
  experienceItemArray[index].team = team;
  experienceItemArray[index].duration = duration;
  experienceItemArray[index].description = description;
};

export const addExperienceID = () => {
  experienceItemCurrentId++;
};

export const getExperienceID = () => {
  return experienceItemCurrentId;
};

export const setExperienceArray = expArray => {
  experienceItemArray = expArray;
  experienceItemArray = experienceItemArray['experienceArray'];
};

export const setExperienceID = () => {
  experienceItemCurrentId = 0;
  for (let i = 0; i < experienceItemArray.length; i++) {
    experienceItemCurrentId++;
  }
};
//Experience

//Trophy
export const addAccomplishmentItem = (title, duration, description, idNum) => {
  if (title != '' && duration != '') {
    const CardObjectExample = new trophyCardObject(
      title,
      duration,
      description,
      idNum,
    );
    trophyItemArray.push(CardObjectExample);
    trophyItemCurrentId++;
  }
};

export const getAccomplishmentArray = () => {
  return trophyItemArray;
};

export const deleteAccomplishmentItem = index => {
  trophyItemArray.splice(index, 1);
  for (let i = index; i < trophyItemArray.length; i++) {
    trophyItemArray[i].idNum = trophyItemArray[i].idNum - 1;
  }
  if (trophyItemCurrentId > 0) {
    trophyItemCurrentId--;
  }
};

export const editAccomplishmentItem = (title, duration, description, index) => {
  trophyItemArray[index].title = title;
  trophyItemArray[index].duration = duration;
  trophyItemArray[index].description = description;
};

export const addAccomplishmentID = () => {
  trophyItemCurrentId++;
};

export const getAccomplishmentID = () => {
  return trophyItemCurrentId;
};

export const setAccomplishmentArray = trophyArray => {
  trophyItemArray = trophyArray;
  trophyItemArray = trophyItemArray['trophyArray'];
};

export const setAccomplishmentID = () => {
  trophyItemCurrentId = 0;
  for (let i = 0; i < trophyItemArray.length; i++) {
    trophyItemCurrentId++;
  }
};
//Trophy

//Measurable
export const addMeasurableItem = (title, value, idNum) => {
  if (title != '' && value != '') {
    const CardObjectExample = new MeasurableCardObject(title, value, idNum);
    measurableItemArray.push(CardObjectExample);
    measurableItemCurrentId++;
  }
};

export const getMeasurableArray = () => {
  return measurableItemArray;
};

export const deleteMeasurableItem = index => {
  measurableItemArray.splice(index, 1);
  for (let i = index; i < measurableItemArray.length; i++) {
    measurableItemArray[i].idNum = measurableItemArray[i].idNum - 1;
  }
  if (measurableItemCurrentId > 0) {
    measurableItemCurrentId--;
  }
};

export const editMeasurableItem = (title, value, index) => {
  measurableItemArray[index].title = title;
  measurableItemArray[index].value = value;
};

export const addMeasurableID = () => {
  measurableItemCurrentId++;
};

export const getMeasurableID = () => {
  return measurableItemCurrentId;
};

export const setMeasurableArray = measurableArray => {
  measurableItemArray = measurableArray;
  measurableItemArray = measurableItemArray['measurableArray'];
};

export const setMeasurableID = () => {
  measurableItemCurrentId = 0;
  for (let i = 0; i < measurableItemArray.length; i++) {
    measurableItemCurrentId++;
  }
};
//Measurable

//Video Item
function VideoItemObject(idNum, url, media) {
  this.idNum = idNum;
  this.url = url;
  this.media = media;
}

export const addVideoItem = (id, url, media) => {
  const VideoObject = new VideoItemObject(id, url, media);
  if (videoItemArray.length < 3) {
    videoItemArray.push(VideoObject);
  }
};

export const getVideoItem = () => {
  return videoItemArray;
};

export const addVideoImageID = () => {
  videoImageCurrentId++;
};

export const getVideoImageID = () => {
  return videoImageCurrentId;
};

export const getMediaArray = () => {
  return videoItemArray;
};

export const deleteMediaItem = (index) => {
  videoItemArray.splice(index, 1);
  for (let i = index; i < videoItemArray.length; i++) {
    videoItemArray[i].idNum = videoItemArray[i].idNum - 1;
  }
  if (videoImageCurrentId > 0) {
    videoImageCurrentId--;
  }
};

export const setMediaArray = videoArray => {
  videoItemArray = videoArray;
  videoItemArray = videoItemArray['mediaArray'];
};

export const setVideoImageID = () => {
  videoImageCurrentId = 0;
  for (let i = 0; i < videoItemArray.length; i++) {
    videoImageCurrentId++;
  }
};
//Video Item

export const getIconItem = type => {
  return type;
};

export const primaryColor = '#3EB489';
export const companyName = 'Spogo';
