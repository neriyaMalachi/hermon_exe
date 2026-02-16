import Oun from "./components/oun";
import Home from "./components/home";
import Tow from "./components/tow";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/Login";
import File1 from "./components/file1";
import PayPage from "./components/PayPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="oun" element={<Oun />} />
        <Route path="file1" element={<File1 />} />
        <Route path="pay" element={<PayPage />} />
        <Route path="ner">
          <Route index element={<Oun />} />
          <Route path="tow" element={<Tow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
