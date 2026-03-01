import { useState } from "react";

export default function App() {
  const users = [
    "Dan",
    "Noa",
    "Yossi",
    "Rina",
    "Avi",
    "Shira",
    "Tom",
    "Lior",
    "Dana",
    "Omer",
    "Yael",
    "Idan",
    "Neta",
    "Eli",
    "Maya",
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentUsers = users.slice(startIndex, endIndex);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  return (
    <div>
      <h2>Users</h2>

      {currentUsers.map((user, index) => (
        <p key={index}>{user}</p>
      ))}

      <div style={{ marginTop: 20 }}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
