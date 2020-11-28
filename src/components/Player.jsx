import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Player = ({ playerId }) => {
  const API_KEY = "h9vIRJ3BX4giPnYrzznPD758zs03";

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [batStyle, setBatStyle] = useState("");
  const [bowlStyle, setBowlStyle] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [profile, setProfile] = useState("");
  const [playingRole, setPlayingRole] = useState("");
  let history = useHistory();

  useEffect(() => {
    Axios.get(
      `https://cricapi.com/api/playerStats?apikey=${API_KEY}&pid=${playerId}`
    ).then((res) => {
      setName(res.data.name);
      setImage(res.data.imageURL);
      setBatStyle(res.data.battingStyle);
      setBowlStyle(res.data.bowlingStyle);
      setCountry(res.data.country);
      setAge(res.data.currentAge);
      setProfile(res.data.profile);
      setPlayingRole(res.data.playingRole);
    });
  }, []);

  const handleGoBack = () => {
    history.push("/");
  };

  return (
    <div>
      <div className="goBackBtnDiv">
        <button onClick={handleGoBack} className="goBackBtn">
          Go Back
        </button>
      </div>
      <div className="infoContainer">
        <img src={image} alt="profileImage" className="imgDiv" />
        <h1 className="playerName">{name}</h1>
        <div className="pInfo">Country: {country}</div>
        <div className="pInfo">Playing Role: {playingRole}</div>
        <div className="pInfo">Age: {age}</div>
        <div className="pInfo">Batting Style: {batStyle}</div>
        <div className="pInfo">Bowling Style: {bowlStyle}</div>

        <div className="pProfile">{profile}</div>
      </div>
    </div>
  );
};

export default Player;
