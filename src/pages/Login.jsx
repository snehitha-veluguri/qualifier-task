import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === email &&
      user.password === password
    ) {
      navigate("/profile");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h1>Signin to your PopX account</h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <input
          type="email"
          placeholder="Enter email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={loginUser}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;