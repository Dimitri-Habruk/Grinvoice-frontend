import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Register.css";
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
    // e.preventDefault();

    /*axios post sur urlAllUsers avec tout les target value 
    si confirm Pass false = axios post marche pas
    */
    axios
      .post(`${base_url}/register`, {
        name: newUser.name,
        surname: newUser.surname,
        email: newUser.email,
        password: newUser.password,
      })
      .then((response) => response.data)
      //   .then(response => {
      //     localStorage.setItem('usertoken', response.data) // sets a usertoken into the localstorage coming from res.data
      //     return response.data
      // })
      .catch((err) => console.error(err));
    navigate(`/login`);

    // console.log(e);
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
              {/* <input type="text" placeholder="Country"  className="inputRegister"/> */}
              <input
                type="text"
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                placeholder="E-mail"
                className="inputRegister"
              />
              {/* <input type="text" placeholder="Phone number"  className="inputRegister"/> */}
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

            {/* <div className="genderInputs">
                <label for="Gender">Gender</label>
                 <input type="radio" name="gender" value="male"/> Male
                <input type="radio" name="gender" value="female"/> Female
    
            </div> */}

            {/* <div className="dateOfBirthInputs">
            <label for="Date of birth">Date of birth</label>
              <input type="date" value="1990-01-01" className="inputDateBirth"/> 
            </div> */}
            {/*
          Gender Male Female
          Date of birth DD MM YYYY
          */}

            {/* <div>
            <input
              type="checkbox"
              className="checkboxTerms"
              name="checkBox Terms & Conditions"
            />
            <label for="horns">Agree with Terms & Conditions</label>
          </div> */}

            {confirmPassword && <button type="submit"> Create account</button>}
            {!confirmPassword && <button disabled>Create account </button>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
