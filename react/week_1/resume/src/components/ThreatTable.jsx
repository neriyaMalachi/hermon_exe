// src/components/ThreatTable/ThreatTable.jsx
import "../css/ThreatTable.css";
import ThreatRow from "./ThreatRow";

export default function ThreatTable({ items }) {
  return (
    <div className="tableWrap">
      <table className="table">
        <thead>
          <tr>
            <th>Actor</th>
            <th>Organization</th>
            <th>Attacks</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 ? (
            <tr>
              <td className="table__empty" colSpan={4}>
                No results.
              </td>
            </tr>
          ) : (
            items.map((item) => <ThreatRow key={item.id ?? item.name} item={item} />)
          )}
        </tbody>
      </table>
    </div>
  );
}
