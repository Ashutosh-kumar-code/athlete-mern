import { useEffect, useState } from "react";
import "./ProfilePage.css";
import axios from "axios";

export default function ProfilePage() {
  // const [profile] = useState({
  //   name: "John Doe",
  //   email: "john@example.com",
  //   password: "********",
  //   bio: "Passionate about sports and technology. uhfuidsg iufsidg huisfdg dfgiupsdfypg sfypog ysdfpoui gupsdfiohyg upiosdf giou iugygfuy",
  //   userRole: "Player",
  //   country: "USA",
  //   age: "28",
  //   sport: "Basketball",
  // });

  const [profile, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userId = localStorage.getItem("athlete_web_user_id"); // Retrieve user ID

      if (!userId) {
        setError("User ID not found in localStorage");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/user/${userId}`);
        setUser(response.data);
      } catch (err) {
        setError("User not found or server error");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);
  // console.log("User profile", user)

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <>  
    <div className="profile-container">
      <div className="background-animation"></div>
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="profile-image"
          />
          <h2 className="profile-name">{profile?.name}</h2>
          <p className="profile-role" style={{fontStyle: 'italic'}}>{profile?.userRole}</p>
        </div>
        <div className="profile-details">
         {profile?.bio && <ProfileField label="" value={profile?.bio} /> }
          <ProfileField label="Email" value={profile?.email} />
        {profile?.country &&  <ProfileField label="Country" value={profile?.country} /> }
         {profile?.age && <ProfileField label="Age" value={profile?.age} /> }
        {profile?.sport &&  <ProfileField label="Sport" value={profile?.sport} /> }
        </div>
      </div>
    </div>
    </>
  );
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div className="profile-field">
     {label &&  <span className="field-label">{label}:</span> }
      <span className="field-value">{value}</span>
    </div>
  );
}

