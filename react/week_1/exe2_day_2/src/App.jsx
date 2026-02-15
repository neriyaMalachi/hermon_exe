import { useMemo, useState } from "react";
import "./App.css";

export default function App() {
  return <MiniPoll />;
}

function MiniPoll() {
  const [options, setOptions] = useState(["React", "Vue", "Svelte"]);
  const [votes, setVotes] = useState([0, 0, 0]); // parallel array
  const [showResults, setShowResults] = useState(false);

  const [newOption, setNewOption] = useState("");
  const [showError, setShowError] = useState(false);

  function voteFor(index) {
    setVotes((prev) => prev.map((v, i) => (i === index ? v + 1 : v)));
  }

  function toggleResults() {
    setShowResults((prev) => !prev);
  }

  function resetVotes() {
    setVotes((prev) => prev.map(() => 0));
  }

  function addOption() {
    const name = newOption.trim();
    if (!name) {
      setShowError(true);
      return;
    }

    setOptions((prev) => [...prev, name]);
    setVotes((prev) => [...prev, 0]);
    setNewOption("");
    setShowError(false);
  }

  // Leader derived from state (no extra state needed)
  const leaderText = useMemo(() => {
    if (options.length === 0) return "";

    const max = Math.max(...votes);
    const leaders = options.filter((_, i) => votes[i] === max);

    if (max === 0) return "No votes yet.";
    if (leaders.length > 1) return "It’s a tie!";
    return `Leader: ${leaders[0]} (${max})`;
  }, [options, votes]);

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Mini Poll</h1>

        <div className="controls">
          <button onClick={toggleResults}>
            {showResults ? "Hide Results" : "Toggle Results"}
          </button>

          <button className="secondary" onClick={resetVotes} disabled={options.length === 0}>
            Reset Votes
          </button>
        </div>

        <div className="addBox">
          <input
            value={newOption}
            onChange={(e) => {
              setNewOption(e.target.value);
              if (showError) setShowError(false);
            }}
            placeholder="Add option..."
          />
          <button className="secondary" onClick={addOption}>
            Add
          </button>

          {showError && <div className="error">Please enter a name.</div>}
        </div>

        {/* Leader: show only when showResults is true */}
        {showResults && options.length > 0 && (
          <div className="leader">{leaderText}</div>
        )}

        {/* Placeholder when no options */}
        {options.length === 0 ? (
          <p className="muted">No options yet. Add one above.</p>
        ) : (
          <ul className="list">
            {options.map((opt, i) => (
              <li key={opt + i} className="row">
                <span className="opt">{opt}</span>

                <div className="right">
                  <button onClick={() => voteFor(i)}>Vote</button>

                  {showResults ? (
                    <span className="votes">{votes[i]} votes</span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
