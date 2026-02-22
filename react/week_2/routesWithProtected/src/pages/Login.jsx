import  { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NeriyaAuth } from "../context/AuthProvider";

function Login() {
  const navigate = useNavigate()
  const {setName} = useContext(NeriyaAuth)
  return (
    <div>
      Login
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          navigate("/contact")
        }}
      >
        LOGIN
      </button>
    </div>
  );
}

export default Login;
