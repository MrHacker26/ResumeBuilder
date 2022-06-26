import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GithubOutlined } from "@ant-design/icons";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Templates from "./pages/templates";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/templates/:id" element={<ProtectedRoute><Templates /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <h5>
        Made with ❤️&nbsp;by &nbsp;
          <a href="https://github.com/MrHacker26"><GithubOutlined /><span className="myFont">&nbsp;Tarun Joshi</span> &nbsp;</a>
        </h5>
      </footer>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("resume")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
