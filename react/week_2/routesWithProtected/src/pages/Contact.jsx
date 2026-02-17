import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NeriyaAuth } from "../context/AuthProvider";

function Contact() {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token !== "admin") {
      navigate("/login");
    }
  }, []);
  return <div>Contact</div>;
}

export default Contact;
