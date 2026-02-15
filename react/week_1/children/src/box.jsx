export default function Box(props) {
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      {props.children}
    </div>
  );
}
