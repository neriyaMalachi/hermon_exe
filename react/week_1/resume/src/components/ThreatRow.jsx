// src/components/ThreatRow/ThreatRow.jsx
import "../css/ThreatRow.css";

function StatusBadge({ status }) {
  const cls =
    status === "active"
      ? "badge badge--active"
      : status === "quiet"
      ? "badge badge--quiet"
      : status === "arrested"
      ? "badge badge--arrested"
      : status === "dead"
      ? "badge badge--dead"
      : "badge";

  return <span className={cls}>{status || "unknown"}</span>;
}

export default function ThreatRow({ item }) {
  return (
    <tr>
      <td>
        <div className="actor">
          <img
            className="actor__img"
            src={item.imageUrl}
            alt={`Actor ${item.name}`}
            width={46}
            height={46}
          />
          <div className="actor__meta">
            <div className="actor__name">{item.name}</div>
            <div className="actor__sub">Threat profile</div>
          </div>
        </div>
      </td>

      <td className="muted">{item.organization}</td>

      <td>
        <div className="attacks">
          <button className="attacks__btn" type="button">
            Attacks
          </button>
          <span className="attacks__count">{item.attacksCount}</span>
        </div>
      </td>

      <td>
        <StatusBadge status={item.status} />
      </td>
    </tr>
  );
}
