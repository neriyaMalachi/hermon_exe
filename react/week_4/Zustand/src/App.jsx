import Inc from "./components/Inc";
import Dnc from "./components/Dnc";
import UserName from "./components/UserName";
import Number from "./components/Number";
function App() {
  return (
    <div>
      <h2>
        <UserName />
      </h2>
      <Inc />
      <Number />
      <Dnc />
    </div>
  );
}

export default App;
