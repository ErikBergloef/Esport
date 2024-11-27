import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddPlayer from "./pages/AddPlayer";

function App() {
  let [teamA, setTeamA] = useState({
    name: "Team Liquid",
    players: ["Boxi", "Insania"],
  });
  let [teamB, setTeamB] = useState({
    name: "Gaimin Gladiators",
    players: ["Ace", "tOfu"],
  });

  const changeTeamName = (team, newName) => {
    if (team === "A") setTeamA({ ...teamA, name: newName });
    if (team === "B") setTeamB({ ...teamB, name: newName });
  };

  const addPlayer = (username, team) => {
    if (team === "A" && teamA.players.length < 5) {
      setTeamA({ ...teamA, players: [...teamA.players, username] });
    } else if (team === "B" && teamB.players.length < 5) {
      setTeamA({ ...teamB, players: [...teamB.players, username] });
    }
  };

  const removePlayer = (username, team) => {
    if (team === "A") {
      setTeamA({
        ...teamA,
        players: teamA.players.filter((player) => player !== username),
      });
    } else if (team === "B") {
      setTeamB({
        teamB,
        players: teamA.players.filter((player) => player !== username),
      });
    }
  };

  const movePlayer = (username, fromTeam) => {
    if (fromTeam === "A" && teamB.players.length < 5) {
      removePlayer(username, "A");
      addPlayer(username, "B");
    } else if (fromTeam === "B" && teamA.players.length < 5) {
      removePlayer(username, "B");
      addPlayer(username, "A");
    }
  };

  return (
    <>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="addplayer">Add Player</Link>
      </nav>

      <h1>E-Sport tournament</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              teamA={teamA}
              teamB={teamB}
              changeTeamName={changeTeamName}
              removePlayer={removePlayer}
              movePlayer={movePlayer}
            />
          }
        />
        <Route
          path="/addplayer"
          element={
            <AddPlayer teamA={teamA} teamB={teamB} addplayer={addPlayer} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
