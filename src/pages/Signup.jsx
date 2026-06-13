import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/profile");
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h1>Create your PopX account</h1>

        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Company Name"
          name="company"
          onChange={handleChange}
        />

        <div className="radio-group">
          <p>Are you an Agency?</p>

          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={form.agency === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="No"
              checked={form.agency === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button className="primary-btn" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;