// src/App.jsx
import { useMemo, useState } from "react";
import data from "./data/file.json";

import avatarImg from "./assets/avatar.png";

export default function App() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [minAttacks, setMinAttacks] = useState(0);
  const [onlyMostDangerous, setOnlyMostDangerous] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = data;

    if (q) list = list.filter((x) => x.name?.toLowerCase().includes(q));
    if (status !== "all") list = list.filter((x) => x.status === status);

    list = list.filter((x) => (Number(x.attacksCount) || 0) >= minAttacks);

    if (onlyMostDangerous) {
      const max = Math.max(...list.map((x) => Number(x.attacksCount) || 0), 0);
      list = list.filter((x) => (Number(x.attacksCount) || 0) === max);
    }

    return list;
  }, [query, status, minAttacks, onlyMostDangerous]);

  const Avatar = ({ size = 54 }) => (
    <img
      src={avatarImg}
      alt="avatar"
      className="avatar"
      style={{ width: size, height: size }}
    />
  );

  const StatusBadge = ({ value }) => {
    const cls =
      value === "active"
        ? "badge badge--active"
        : value === "quiet"
        ? "badge badge--quiet"
        : value === "arrested"
        ? "badge badge--arrested"
        : value === "dead"
        ? "badge badge--dead"
        : "badge";

    return <span className={cls}>{value || "unknown"}</span>;
  };

  return (
    <section className="page">
      <style>{css}</style>

      <header className="header">
        <div className="header__left">
          <h1 className="title">Threat Actor DataBase</h1>
          <p className="subTitle">Search + filters + table (all in App.jsx)</p>
        </div>

        <div className="header__right">
          <div className="userChip">
            {/* <Avatar size={44} /> */}
            <div className="userChip__text">
              <div className="userChip__name">N.M Ambition</div>
              <div className="userChip__role">Admin</div>
            </div>
          </div>
        </div>
      </header>

      <div className="nav">
        <input
          className="input"
          type="text"
          placeholder="🔍 Search by Name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="group">
          <span className="label">Min Attacks</span>
          <input
            className="number"
            type="number"
            min={0}
            value={minAttacks}
            onChange={(e) => setMinAttacks(Number(e.target.value) || 0)}
          />
        </div>

        <div className="group">
          <span className="label">Status</span>
          <select
            className="select"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setOnlyMostDangerous(false);
            }}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="quiet">Quiet</option>
            <option value="arrested">Arrested</option>
            <option value="dead">Dead</option>
          </select>
        </div>

        <button
          className={`btn ${onlyMostDangerous ? "isActive" : ""}`}
          type="button"
          onClick={() => setOnlyMostDangerous((v) => !v)}
          title="Show only max attacks"
        >
          © Most Dangerous
        </button>
      </div>

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
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="empty">
                  No results.
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr key={item.id ?? item.name}>
                  <td>
                    <div className="actor">
                      {/* ✅ Avatar מהתמונה שלך */}
                      <Avatar size={46} />
                      <div className="actor__meta">
                        <div className="actor__name">{item.name}</div>
                        <div className="actor__sub">Threat profile</div>
                      </div>
                    </div>
                  </td>

                  <td className="muted">{item.organization}</td>

                  <td>
                    <div className="attacks">
                      <button className="attackBtn" type="button">
                        Attacks
                      </button>
                      <span className="count">{item.attacksCount}</span>
                    </div>
                  </td>

                  <td>
                    <StatusBadge value={item.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const css = `
*{box-sizing:border-box}
body{margin:0}
.page{
  min-height:100vh;
  padding:24px;
  background:#0b0f1a;
  color:#e9eefc;
  font-family:system-ui, Arial;
}
.header{
  max-width:1100px;
  margin:0 auto 12px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
}
.title{margin:0;font-size:32px;letter-spacing:.4px}
.subTitle{margin:6px 0 0;opacity:.75}
.userChip{
  display:flex;align-items:center;gap:10px;
  padding:10px 12px;border-radius:14px;
  border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.04);
}
.userChip__name{font-weight:800}
.userChip__role{font-size:13px;opacity:.75}

.nav{
  max-width:1100px;
  margin:0 auto 16px;
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  align-items:center;
  padding:14px;
  border:1px solid rgba(255,255,255,.12);
  border-radius:14px;
  background:rgba(255,255,255,.04);
  backdrop-filter: blur(8px);
}

.input{
  flex:1;
  min-width:240px;
  padding:12px 12px;
  border-radius:10px;
  border:1px solid rgba(255,255,255,.16);
  background:rgba(0,0,0,.25);
  color:#e9eefc;
  outline:none;
  font-size:16px;
}

.group{
  display:flex;
  align-items:center;
  gap:8px;
  padding:8px 10px;
  border-radius:10px;
  border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.03);
}
.label{opacity:.85;font-size:14px}
.number,.select{
  padding:10px 10px;
  border-radius:10px;
  border:1px solid rgba(255,255,255,.16);
  background:rgba(0,0,0,.25);
  color:#e9eefc;
  outline:none;
  font-size:15px;
}

.btn{
  padding:12px 12px;
  border-radius:10px;
  border:1px solid rgba(255,255,255,.16);
  background:rgba(0,0,0,.25);
  color:#e9eefc;
  cursor:pointer;
  font-size:15px;
  transition: transform .12s ease, background .12s ease;
}
.btn:hover{transform:translateY(-1px);background:rgba(255,255,255,.08)}
.btn.isActive{
  background:rgba(255,255,255,.14);
  border-color:rgba(255,255,255,.28);
}

.tableWrap{
  max-width:1100px;
  margin:0 auto;
  border-radius:14px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.03);
}
.table{width:100%;border-collapse:collapse}
.table thead th{
  text-align:left;
  padding:14px 12px;
  font-weight:800;
  font-size:14px;
  opacity:.9;
  background:rgba(255,255,255,.04);
}
.table tbody td{
  padding:12px;
  border-top:1px solid rgba(255,255,255,.10);
  vertical-align:middle;
}

.empty{padding:18px 12px;opacity:.8}

.actor{display:flex;align-items:center;gap:12px}
.actor__meta{display:flex;flex-direction:column;gap:2px}
.actor__name{font-weight:900;font-size:15px}
.actor__sub{font-size:13px;opacity:.72}
.muted{opacity:.85}

.attacks{display:inline-flex;align-items:center;gap:10px}
.attackBtn{
  padding:8px 10px;
  border-radius:10px;
  border:1px solid rgba(255,255,255,.14);
  background:rgba(0,0,0,.25);
  color:#e9eefc;
  cursor:pointer;
}
.count{font-weight:900;opacity:.95}

.avatar{
  border-radius:50%;
  object-fit:cover;
  border:3px solid #ffffff;
  box-shadow:0 4px 12px rgba(0,0,0,.25);
}

.badge{
  display:inline-flex;
  padding:6px 10px;
  border-radius:999px;
  font-size:13px;
  border:1px solid rgba(255,255,255,.18);
  background:rgba(0,0,0,.25);
}
.badge--active{background:rgba(0,255,140,.10);border-color:rgba(0,255,140,.25)}
.badge--quiet{background:rgba(255,210,0,.10);border-color:rgba(255,210,0,.25)}
.badge--arrested{background:rgba(0,160,255,.10);border-color:rgba(0,160,255,.25)}
.badge--dead{background:rgba(255,80,80,.12);border-color:rgba(255,80,80,.25)}
`;
