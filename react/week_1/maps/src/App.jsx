function App() {
  const array = ["apple", "banna", "painapple", "melon", "mango"];
  return (
    <div className="">
      {array.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
    </div>
  );
}

export default App;
