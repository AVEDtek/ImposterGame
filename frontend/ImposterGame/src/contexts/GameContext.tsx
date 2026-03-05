import { createContext, useContext, useState } from "react";

const GameContext = createContext({
    gameState: "",
    time: 0,
    players: [],
    currentPlayer: "",
    imposter: "",
    problem: null,
    testCycle: null,
    code: "",
    commits: [],
    votes: null,
    voted: [],
    votedCorrectly: false
});

export function GameProvider({ children }: { children: React.ReactNode }) {
    const [gameState, setGameState] = useState("coding");
    const [time, setTime] = useState(0);

    const [players, setPlayers] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState("");
    const [imposter, setImposter] = useState("");

    const [problem, setProblem] = useState(null);
    const [testCycle, setTestCycle] = useState(null);
    const [code, setCode] = useState("");

    const [commits, setCommits] = useState([]);
    const [votes, setVotes] = useState(null);
    const [voted, setVoted] = useState([]);
    const [votedCorrectly, setVotedCorrectly] = useState(false);

    const value = {
        gameState,
        time,
        players,
        currentPlayer,
        imposter,
        problem,
        testCycle,
        code,
        commits,
        votes,
        voted,
        votedCorrectly
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("useGame must be used within a GameProvider");
    }
    return context;
}