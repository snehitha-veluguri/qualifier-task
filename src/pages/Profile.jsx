import "../styles/profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container">
      <div className="profile-box">
        <h3>Account Settings</h3>

        <div className="profile-info">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          <div>
            <h4>{user?.fullName}</h4>
            <p>{user?.email}</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat.
        </p>
      </div>
    </div>
  );
}

export default Profile;