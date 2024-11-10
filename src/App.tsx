import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./features/login/Login";
import Home from "./features/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
