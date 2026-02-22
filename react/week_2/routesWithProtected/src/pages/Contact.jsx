import {  useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NeriyaAuth } from "../context/AuthProvider";

function Contact() {
  const navigate = useNavigate();
    const {name} = useContext(NeriyaAuth)
  
  useEffect(() => {
    if (name !== "admin") {
      navigate("/login");
    }
  }, []);
  return <div>Contact</div>;
}

export default Contact;
