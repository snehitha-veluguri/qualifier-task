// // import "../styles/profile.css";

// // function Profile() {
// //   const user =
// //     JSON.parse(localStorage.getItem("user")) || {};

// //   return (
// //     <div className="profile-screen">
// //       <div className="profile-container">

// //         <div className="header">
// //           <h3>Account Settings</h3>
// //         </div>

// //         <div className="profile-info">

// //           <div className="image-wrapper">
// //             <img
// //               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
// //               alt="profile"
// //               className="profile-image"
// //             />

// //             <div className="camera-icon">
// //               📷
// //             </div>
// //           </div>

// //           <div className="user-details">
// //             <h4>{user.fullName || "Marry Doe"}</h4>
// //             <p>{user.email || "Marry@example.com"}</p>
// //           </div>

// //         </div>

// //         <div className="description">
// //           Lorem Ipsum Dolor Sit Amet,
// //           Consetetur Sadipscing Elitr,
// //           Sed Diam Nonumy Eirmod Tempor
// //           Invidunt Ut Labore Et Dolore
// //           Magna Aliquyam Erat, Sed Diam
// //         </div>

// //         <div className="divider"></div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Profile;

// import "../styles/profile.css";

// function Profile() {
//   const user = JSON.parse(localStorage.getItem("user")) || {};

//   return (
//     <div className="profile-screen">
//       <div className="profile-container">
//         {/* Header */}
//         <div className="profile-header">
//           <h3>Account Settings</h3>
//         </div>

//         {/* User Info */}
//         <div className="profile-info">
//           <div className="profile-image-wrapper">
//             <img
//               src="https://i.pravatar.cc/150?img=5"
//               alt="Profile"
//               className="profile-image"
//             />

//             <div className="camera-icon">
//               📷
//             </div>
//           </div>

//           <div className="profile-details">
//             <h4>{user.fullName || "Marry Doe"}</h4>
//             <p>{user.email || "marry@example.com"}</p>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="profile-description">
//           Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
//           Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
//           Dolore Magna Aliquyam Erat, Sed Diam.
//         </div>

//         <div className="divider"></div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import "../styles/profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="profile-screen">
      <div className="profile-container">
        <div className="profile-header">
          <h3>Account Settings</h3>
        </div>

        <div className="profile-info">
          <div className="profile-image-wrapper">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="profile-image"
            />

            <div className="camera-icon">
              📷
            </div>
          </div>

          <div className="profile-details">
            <h4>{user.fullName}</h4>
            <p>{user.email}</p>
          </div>
        </div>

        <div className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam.
        </div>

        <div className="divider"></div>
      </div>
    </div>
  );
}

export default Profile;