import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; 
import Home from "./pages/Home";
import AddPlayer from './pages/AddPlayer';
import "./App.css";

const App = () => {
    const [teamA, setTeamA] = useState({ name: "Team Liquid", players: [] });
    const [teamB, setTeamB] = useState({ name: "Gamin Gladiators", players: [] });

    // Ändra team namn
    const changeTeamName = (team, newName) => {
        if (team === 'A') {
            setTeamA({ ...teamA, name: newName });
        } else if (team === 'B') {
            setTeamB({ ...teamB, name: newName });
        }
    };

    // Lägg till spelare
    const addPlayer = (player, team) => {
        if (team === 'A' && teamA.players.length < 5) {
            setTeamA({ ...teamA, players: [...teamA.players, player] });
        } else if (team === 'B' && teamB.players.length < 5) {
            setTeamB({ ...teamB, players: [...teamB.players, player] });
        }
    };

    // Ta bort spelare
    const removePlayer = (player, team) => {
        if (team === 'A') {
            setTeamA({ ...teamA, players: teamA.players.filter(p => p !== player) });
        } else if (team === 'B') {
            setTeamB({ ...teamB, players: teamB.players.filter(p => p !== player) });
        }
    };

    // Flytta spelare till andra laget
    const movePlayer = (player, fromTeam, toTeam) => {
        if (fromTeam === 'A' && toTeam === 'B') {
            setTeamA({ ...teamA, players: teamA.players.filter(p => p !== player) });
            setTeamB({ ...teamB, players: [...teamB.players, player] });
        } else if (fromTeam === 'B' && toTeam === 'A') {
            setTeamB({ ...teamB, players: teamB.players.filter(p => p !== player) });
            setTeamA({ ...teamA, players: [...teamA.players, player] });
        }
    };

    return (
        <>
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
                        <AddPlayer
                            teamA={teamA}
                            teamB={teamB}
                            addPlayer={addPlayer}
                        />
                    }
                />
            </Routes>
        </>
    );
};

export default App;
