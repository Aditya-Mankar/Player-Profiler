import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [playerId, setPlayerId] = useState(35320);
  const [buttonClick, setButtonClicked] = useState(0);
  const API_KEY = "h9vIRJ3BX4giPnYrzznPD758zs03";
  let history = useHistory();

  useEffect(() => {
    Axios.get(
      `https://cricapi.com/api/playerFinder?apikey=${API_KEY}&name=${name}`
    ).then((pData) => {
      if (pData.data.data[0] !== undefined && pData.data.data !== []) {
        setPlayerId(pData.data.data[0].pid);
      }
    });
  }, [buttonClick, name]);

  const handleNameIpChange = (e) => {
    setName(e.target.value);
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
            placeholder="Enter Player Name"
            onChange={handleNameIpChange}
            className="ipBoxes"
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
          Check out the code&ensp;
          <a href="https://github.com/Aditya-Mankar/Player-Profiler" target="_blank">
            here
          </a>
        </h3>
        <h2>
          Developed by&ensp;
          <a href="https://github.com/Aditya-Mankar" target="_blank">
            Aditya Mankar
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Home;
