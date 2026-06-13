import { useNavigate } from "react-router-dom";
import "../styles/common.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="container bottom">
      <div>
        <h1>Welcome to PopX</h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Landing;