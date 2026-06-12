
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "../styles/signup.css";

// function Signup() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     password: "",
//     company: "",
//     agency: "Yes",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const avatarId = Math.floor(Math.random() * 70) + 1;

//     const userData = {
//       ...formData,
//       profileImage: `https://i.pravatar.cc/150?img=${avatarId}`,
//     };

//     localStorage.setItem(
//       "user",
//       JSON.stringify(userData)
//     );

//     toast.success("Account Created Successfully");

//     setTimeout(() => {
//       navigate("/profile");
//     }, 1000);
//   };

//   return (
//     <div className="signup-screen">
//       <div className="signup-container">
//         <h1>
//           Create your
//           <br />
//           PopX account
//         </h1>

//         <form onSubmit={handleSubmit}>
//           <div className="signup-input-group">
//             <label>
//               Full Name <span>*</span>
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Marry Doe"
//               required
//               onChange={handleChange}
//             />
//           </div>

//           <div className="signup-input-group">
//             <label>
//               Phone number <span>*</span>
//             </label>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Marry Doe"
//               required
//               onChange={handleChange}
//             />
//           </div>

//           <div className="signup-input-group">
//             <label>
//               Email address <span>*</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Marry Doe"
//               required
//               onChange={handleChange}
//             />
//           </div>

//           <div className="signup-input-group">
//             <label>
//               Password <span>*</span>
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Marry Doe"
//               required
//               onChange={handleChange}
//             />
//           </div>

//           <div className="signup-input-group">
//             <label>Company name</label>
//             <input
//               type="text"
//               name="company"
//               placeholder="Marry Doe"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="agency-section">
//             <p>
//               Are you an Agency? <span>*</span>
//             </p>

//             <div className="radio-group">
//               <label className="radio-option">
//                 <input
//                   type="radio"
//                   name="agency"
//                   value="Yes"
//                   checked={formData.agency === "Yes"}
//                   onChange={handleChange}
//                 />
//                 Yes
//               </label>

//               <label className="radio-option">
//                 <input
//                   type="radio"
//                   name="agency"
//                   value="No"
//                   checked={formData.agency === "No"}
//                   onChange={handleChange}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="create-account-btn"
//           >
//             Create Account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      toast.error(
        "Password must contain 8+ characters, uppercase, lowercase, number and special character."
      );
      return;
    }

    const avatarId = Math.floor(Math.random() * 70) + 1;

    const userData = {
      ...formData,
      profileImage: `https://i.pravatar.cc/150?img=${avatarId}`,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    toast.success("Account Created Successfully");

    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="signup-screen">
      <div className="signup-container">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="signup-input-group">
            <label>
              Full Name <span>*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              required
              onChange={handleChange}
            />
          </div>

          <div className="signup-input-group">
            <label>
              Phone Number <span>*</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="9876543210"
              required
              onChange={handleChange}
            />
          </div>

          <div className="signup-input-group">
            <label>
              Email Address <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
              onChange={handleChange}
            />
          </div>

          <div className="signup-input-group">
            <label>
              Password <span>*</span>
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              onChange={handleChange}
            />

            <small className="password-hint">
              Must contain 8 characters, uppercase,
              lowercase, number and special character.
            </small>
          </div>

          <div className="signup-input-group">
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              onChange={handleChange}
            />
          </div>

          <div className="agency-section">
            <p>
              Are you an Agency? <span>*</span>
            </p>

            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={formData.agency === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={formData.agency === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="create-account-btn"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;