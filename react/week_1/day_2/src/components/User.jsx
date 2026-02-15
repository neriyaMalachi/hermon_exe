import React from "react";

function User(props) {
    console.log(props);
    
  return (
    <div style={{ background: "silver",margin:"3px", border: "1px solid" }}>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.address}</p>
    </div>
  );
}

export default User;
