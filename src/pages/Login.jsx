import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.error("No Account Found");
      return;
    }

    if (
      email === user.email &&
      password === user.password
    ) {
      toast.success("Login Successful");

      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    } else {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div className="login-screen">
      <div className="login-container">
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <form onSubmit={handleLogin}>
          <div className="login-input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="login-input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            className={`login-submit-btn ${
              email && password ? "active-btn" : ""
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;