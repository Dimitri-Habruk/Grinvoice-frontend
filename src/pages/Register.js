import React from "react";
import { Link } from "react-router-dom";
import "../css/Register.css";

const Register = () => {
  return (
    <>
      <div className="Register">
        <div className="workContain">
        <img
            className="logoPageLogin"
            src={require("../assets/logoPageLogin.png")}
            alt="logoPageLogin"
          />
          <div className="inputsRegister">

          <input type="text" placeholder="Username" className="inputRegister"/>
          <input type="text" placeholder="Full name"  className="inputRegister"/>
          {/* <input type="text" placeholder="Country"  className="inputRegister"/> */}
          <input type="text" placeholder="E-mail"  className="inputRegister"/>
          <input type="text" placeholder="Phone number"  className="inputRegister"/>
          <input type="text" placeholder="Password"  className="inputRegister"/>
          <input type="text" placeholder="Confirm password"  className="inputRegister"/>
          </div>


          <div className="genderInputs">
                <label for="Gender">Gender</label>
                 <input type="radio" name="gender" value="male"/> Male
                <input type="radio" name="gender" value="female"/> Female
    
            </div>

            <div className="dateOfBirthInputs">
            <label for="Date of birth">Date of birth</label>
                 <input type="date" value="1990-01-01" className="inputDateBirth"/> 
                

            </div>
          {/*
          Gender Male Female
          Date of birth DD MM YYYY
          */}


          <div>
            <input
              type="checkbox"
              className="checkboxTerms"
              name="checkBox Terms & Conditions"
            />
            <label for="horns">Agree with Terms & Conditions</label>
          </div>

          <Link to='/login'> <button> Create account</button></Link>
        </div>
      </div>
    </>
  );
};

export default Register;
