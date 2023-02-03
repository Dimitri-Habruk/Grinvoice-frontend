import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}

      <Routes className='testtest'>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/home" element={<Home />}/>
        <Route path="*" element={<h1>Error 404</h1>} />
        {/* <Route path="/account" element={<CreateUserName onUsernameChange={onUsernameChange} />}/> */}
      </Routes>
    </div>
  );
}

export default App;
