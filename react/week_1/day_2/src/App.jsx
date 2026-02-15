import User from "./components/User";
import data from "./data/data.json";
function App() {
  return (
    <div>
      {data.map((item) => {
        if (item.id % 2 == 0){
          return (
            <div key={item.id}>
              <User name={item.name} address={item.address} age={item.age} />
            </div>
          );}
      })}
    </div>
  );
}

export default App;
