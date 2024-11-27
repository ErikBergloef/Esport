import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddPlayer = ({ teamA, teamB, addPlayer }) => {
    const [username, setUsername] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('');

    const handleAddPlayer = () => {
        if (!username.trim()) {
            alert("Enter a username!");
            return;
        }
        if (!selectedTeam) {
            alert("Select a team!");
            return;
        }
        if (teamA.players.includes(username) || teamB.players.includes(username)) {
            alert("Username is already taken!");
            return;
        }
        addPlayer(username, selectedTeam);
        setUsername('');
    };

    return (
        <div>
            <h1>Add Player</h1>

           <label htmlFor="playerName">Player name</label> <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <div>
                <input
                    type="radio"
                    id="teamA"
                    name="team"
                    value="A"
                    checked={selectedTeam === 'A'}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                />
                <label htmlFor="teamA">Team A</label>

                <input
                    type="radio"
                    id="teamB"
                    name="team"
                    value="B"
                    checked={selectedTeam === 'B'}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                />
                <label htmlFor="teamB">Team B</label>
            </div>
            <button onClick={handleAddPlayer}>Add Player</button>

            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );
};

export default AddPlayer;
