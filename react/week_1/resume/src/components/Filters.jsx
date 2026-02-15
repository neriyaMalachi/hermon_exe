// src/components/Filters/Filters.jsx
import "../css/Filters.css";

export default function Filters({
  query,
  onQueryChange,
  status,
  onStatusChange,
  minAttacks,
  onMinAttacksChange,
  onlyMostDangerous,
  onToggleMostDangerous,
}) {
  return (
    <div className="filters">
      <input
        className="filters__input"
        type="text"
        placeholder="🔍 Search by Name..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />

      <div className="filters__group">
        <span className="filters__label">Min Attacks</span>
        <input
          className="filters__number"
          type="number"
          min={0}
          value={minAttacks}
          onChange={(e) => onMinAttacksChange(Number(e.target.value) || 0)}
        />
      </div>

      <div className="filters__group">
        <span className="filters__label">Status</span>
        <select
          className="filters__select"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="quiet">Quiet</option>
          <option value="arrested">Arrested</option>
          <option value="dead">Dead</option>
        </select>
      </div>

      <button
        className={`filters__btn ${onlyMostDangerous ? "is-active" : ""}`}
        onClick={onToggleMostDangerous}
        type="button"
        title="Filter max attacks"
      >
        © Most Dangerous
      </button>
    </div>
  );
}
