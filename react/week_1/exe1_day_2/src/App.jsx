import { useState } from "react";
import "./App.css";

const MOODS = [
  { key: "neutral", label: "Neutral", emoji: "😐" },
  { key: "happy", label: "Happy", emoji: "😀" },
  { key: "sad", label: "Sad", emoji: "😢" },
  { key: "angry", label: "Angry", emoji: "😡" },
];

const NEUTRAL = MOODS[0];

export default function App() {
  const [currentMood, setCurrentMood] = useState(NEUTRAL);
  const [history, setHistory] = useState([]);
  const [counts, setCounts] = useState({
    neutral: 0,
    happy: 0,
    sad: 0,
    angry: 0,
  });

  function changeMood(nextMood) {
    setHistory((prev) => [currentMood, ...prev].slice(0, 3));
    setCurrentMood(nextMood);
    setCounts((prev) => ({
      ...prev,
      [nextMood.key]: prev[nextMood.key] + 1,
    }));
  }

  function resetAll() {
    setCurrentMood(NEUTRAL);
    setHistory([]);
    setCounts({ neutral: 0, happy: 0, sad: 0, angry: 0 });
  }

  function randomMood() {
    const randomIndex = Math.floor(Math.random() * MOODS.length);
    changeMood(MOODS[randomIndex]);
  }

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Mood Selector</h1>

        <div className="current">
          <span className="emoji">{currentMood.emoji}</span>
          <span className="text">{currentMood.label}</span>
        </div>

        <div className="btnRow">
          <button onClick={() => changeMood(MOODS[1])}>😀 Happy</button>
          <button onClick={() => changeMood(MOODS[2])}>😢 Sad</button>
          <button onClick={() => changeMood(MOODS[3])}>😡 Angry</button>
        </div>

        <div className="btnRow">
          <button className="secondary" onClick={randomMood}>
             Random Mood
          </button>
          <button className="danger" onClick={resetAll}>
             Reset
          </button>
        </div>

        <div className="section">
          <h2>Last 3 moods</h2>
          {history.length === 0 ? (
            <p className="muted">No history yet.</p>
          ) : (
            <ul className="list">
              {history.map((m, i) => (
                <li key={i}>
                  {m.emoji} {m.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="section">
          <h2>Counters</h2>
          <p className="counters">
            😀 Happy: {counts.happy} | 😢 Sad: {counts.sad} | 😡 Angry:{" "}
            {counts.angry}
          </p>
        </div>
      </div>
    </div>
  );
}
