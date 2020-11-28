import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [playerId, setPlayerId] = useState(123);
  const [buttonClick, setButtonClicked] = useState(0);
  const API_KEY = "h9vIRJ3BX4giPnYrzznPD758zs03";
  let history = useHistory();

  useEffect(() => {
    Axios.get(
      `https://cricapi.com/api/playerFinder?apikey=${API_KEY}&name=${firstName}%20${lastName}`
    ).then((pData) => {
      if (pData.data.data[0] !== undefined && pData.data.data !== []) {
        setPlayerId(pData.data.data[0].pid);
      }
    });
  }, [buttonClick, firstName, lastName]);

  const handleFNameIpChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLNameIpChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSearchButton = (e) => {
    e.preventDefault();

    setButtonClicked(buttonClick + 1);

    history.push(`/search/${playerId}`);
  };

  return (
    <div className="Home">
      <div className="container">
        <h1>Player Profiler</h1>

        <form className="inputFields">
          <input
            placeholder="First Name"
            onChange={handleFNameIpChange}
            className="ipBoxes"
            required
          />
          <input
            placeholder="Last Name"
            onChange={handleLNameIpChange}
            className="ipBoxes"
            required
          />
        </form>

        <button className="searchButton" onClick={handleSearchButton}>
          Search
        </button>

        <div className="about">
          <h2>Know more about your favourite Circket players</h2>
        </div>
      </div>

      <div className="footer">
        <h3>
          <a href="https://github.com/Aditya-Mankar" target="_blank">
            Check out the code here
          </a>
        </h3>
        <h2>
          Built by&ensp;
          <a href="https://github.com/Aditya-Mankar" target="_blank">
            Aditya Mankar
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Home;
