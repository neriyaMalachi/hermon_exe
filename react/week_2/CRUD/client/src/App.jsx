import React from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    name: "",
    age: 0,
    id: 0,
  });
  async function getData() {
    const res = await fetch("http://localhost:8080/");
    const allUsers = await res.json();
    setData(allUsers.data);
    console.log(allUsers);
  }
  async function addUser() {
    const res = await fetch("http://localhost:8080/addUser", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const message = await res.json();
    console.log(message);
  }
  async function editUser() {
    console.log(user);

    const res = await fetch(`http://localhost:8080/edituser/${user.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const message = await res.json();
    console.log(message);
  }
  async function deleteUser() {
    console.log(user);

    const res = await fetch(`http://localhost:8080/deleteuser/${user.id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const message = await res.json();
    console.log(message);
  }
  return (
    <div>
      <button onClick={getData}>getData</button>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <p>{item.age}</p>
          </div>
        );
      })}
      <section style={{ background: "yellow", border: "1px solid" }}>
        <h1>add user</h1>

        <input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="number"
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />

        <button onClick={addUser}>add user</button>
      </section>
      <section style={{ background: "green", border: "1px solid" }}>
        <h1>edit user</h1>

        <input
          placeholder="name"
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          placeholder="age"
          type="number"
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <input
          placeholder="id"
          type="number"
          onChange={(e) => setUser({ ...user, id: e.target.value })}
        />
        <button onClick={editUser}>edit user</button>
      </section>
      <section style={{ background: "red", border: "1px solid" }}>
        <h1>delete user</h1>

        <input
          placeholder="id"
          type="number"
          onChange={(e) => setUser({ ...user, id: e.target.value })}
        />
        <button onClick={deleteUser}>delete user</button>
      </section>
    </div>
  );
}

export default App;
