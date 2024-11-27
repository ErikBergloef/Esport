import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ teamA, teamB, changeTeamName, removePlayer, movePlayer }) => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [newName, setNewName] = useState("");

  const handleChangeName = () => {
    if (!selectedTeam) {
      alert("Select a team before changing the name!");
      return;
    }
    if (!newName.trim()) {
      alert("Enter a new name!");
      return;
    }
    changeTeamName(selectedTeam, newName);
    setNewName("");
  };

  return (
    <div>
      <h1>Team Management</h1>

      <div>
        <input
          type="checkbox"
          id="teamA"
          checked={selectedTeam === "A"}
          onChange={() => setSelectedTeam("A")}
        />
        <label htmlFor="teamA">Team Liquid</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="teamB"
          checked={selectedTeam === "B"}
          onChange={() => setSelectedTeam("B")}
        />
        <label htmlFor="teamB">Gamin Gladiators</label>
      </div>

      <div>
        <input
          type="text"
          placeholder="New team name"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <button onClick={handleChangeName}>Change name</button>
      </div>

      {/* Visa spelare i Team A */}
      <div>
        <h2>{teamA.name}</h2>
        <ul>
          {teamA.players.map((player, index) => (
            <li key={index}>
              {player}
              <button onClick={() => removePlayer(player, 'A')}>Remove</button>
              <button onClick={() => movePlayer(player, 'A', 'B')}>Swap team</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Visa spelare i Team B */}
      <div>
        <h2>{teamB.name}</h2>
        <ul>
          {teamB.players.map((player, index) => (
            <li key={index}>
              {player}
              <button onClick={() => removePlayer(player, 'B')}>Remove</button>
              <button onClick={() => movePlayer(player, 'B', 'A')}>Swap team</button>
            </li>
          ))}
        </ul>
      </div>

      <Link to="/addplayer">
        <button>Add Player</button>
      </Link>
    </div>
  );
};

export default Home;
