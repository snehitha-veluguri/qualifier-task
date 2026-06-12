import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h3>Account Settings</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;