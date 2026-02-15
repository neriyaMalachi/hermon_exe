import {UserProvider} from "./context/UserProvider";
import Navbar from "./components/NavBar";
import Profile from "./components/Profile";
import UserEditor from "./components/UserEditor";

export default function App() {
  return (
    <UserProvider>
      <Navbar />
      <Profile />
      <UserEditor />
    </UserProvider>
  );
}
