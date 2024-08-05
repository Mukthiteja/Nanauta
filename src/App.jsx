import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
          <Route path="/" element={Login} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
