import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes, Navigate } from "react-router-dom";
import AllCategories from "./pages/AllCategories";
import EditTicketInfos from "./pages/EditTicketInfos";
import { useEffect, useState } from "react";
import CheckLogin from "./pages/CheckLogin";

function App() {
  // const token = localStorage.getItem("usertoken");

  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("usertoken"));
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<CheckLogin />}>
          <Route path="/home" element={<Home />} />
          <Route path="/allmytickets" element={<AllCategories />} />
          <Route path="/editticket" element={<EditTicketInfos />} />
        </Route>
        <Route path="*" element={<CheckLogin />} />
      </Routes>
    </div>
  );
}

export default App;
