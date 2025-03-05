import { useState } from "react";
import "./ProfilePage.css";

export default function ProfilePage() {
  const [profile] = useState({
    name: "John Doe",
    email: "john@example.com",
    password: "********",
    bio: "Passionate about sports and technology. uhfuidsg iufsidg huisfdg dfgiupsdfypg sfypog ysdfpoui gupsdfiohyg upiosdf giou iugygfuy",
    userRole: "Player",
    country: "USA",
    age: "28",
    sport: "Basketball",
  });

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
          <h2 className="profile-name">{profile.name}</h2>
          <p className="profile-role">{profile.userRole}</p>
        </div>
        <div className="profile-details">
          <ProfileField label="" value={profile.bio} />
          <ProfileField label="Email" value={profile.email} />
          <ProfileField label="Password" value={profile.password} />
          <ProfileField label="Country" value={profile.country} />
          <ProfileField label="Age" value={profile.age} />
          <ProfileField label="Sport" value={profile.sport} />
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

