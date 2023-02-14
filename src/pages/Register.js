import React, { useContext, useState } from "react";
import "../css/Register.css";
import "../css/Home.css";

import { GrinvoiceContext } from "../context/GrinvoiceContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  let navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState(false);
  const { value3 } = useContext(GrinvoiceContext);
  const [base_url, setBase_url] = value3;
  const [newUser, setNewUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
  
    axios
      .post(`${base_url}/register`, {
        name: newUser.name,
        surname: newUser.surname,
        email: newUser.email,
        password: newUser.password,
      })
      .then((response) => response.data)
      .catch((err) => console.error(err));
    
    navigate(`/login`);

  };
  return (
    <>
      <div className="Register">
        <div className="workContain">
          <img
            className="logoPageLogin"
            src={require("../assets/logoPageLogin.png")}
            alt="logoPageLogin"
          />
          <form name="registration" onSubmit={(e) => handleRegister(e)}>
            <div className="inputsRegister">
              <input
                type="text"
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
                placeholder="First name"
                className="inputRegister"
              />
              <input
                type="text"
                onChange={(e) =>
                  setNewUser({ ...newUser, surname: e.target.value })
                }
                placeholder="Full name"
                className="inputRegister"
              />
              <input
                type="text"
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                placeholder="E-mail"
                className="inputRegister"
              />
              <input
                type="password"
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                placeholder="Password"
                className="inputRegister"
              />
              <input
                type="password"
                onChange={(e) => {
                  if (newUser.password === e.target.value) {
                    setConfirmPassword(true);
                  } else {
                    setConfirmPassword(false);
                  }
                }}
                e
                placeholder="Confirm password"
                className="inputRegister"
              />

              {!confirmPassword && <p>Passwords doesn't match</p>}
            </div>

            
            {confirmPassword && <button type="submit"> Create account</button>}
            {!confirmPassword && <button disabled>Create account </button>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
