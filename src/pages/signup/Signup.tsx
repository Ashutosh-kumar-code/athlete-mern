
import React, { useState } from "react";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  password: string;
  bio: string;
  country: string;
  age: string;
  sport: string;
  userRole: string;
}

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  bio?: string;
  country: string;
  age: string;
  sport: string;
  userRole: string;
}

const Signup: React.FC = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    bio: "",
    userRole: "",
    country: "",
    age: "",
    sport: "",
  });

  const [showPassword, setShowPassword] = useState<{ password: boolean }>({
    password: false,
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.bio) {
      newErrors.bio = "Please write bio";
    }
    if (!formData.country) {
      newErrors.country = "Please write your country";
    }
    if (formData.userRole)
      if (formData.userRole == 'Athlete' && !formData.sport) {
        newErrors.sport = "Please write your sport";
      }

    if (!formData.userRole ) {
      newErrors.userRole = "Please select a role";
    }
    if (formData.userRole == 'Athlete' && !formData.age) {
      newErrors.age = "Please write your age";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const result = await axios.post("http://localhost:5000/signup", formData);
        console.log("Form submitted:", result);
        if(result){
          navigate('/login');
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if(name == "userRole" && value != "Athlete"){
      setFormData((prev) => ({
        ...prev,
        ['age']: '',
        ['sport']: '',
      }));
    }

  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => ({ password: !prev.password }));
  };

  console.log("formData=====", formData)

  return (
    <div className="signup-container ">
      <div className="signup-box mt-28 ">
        <div className="signup-header">
          <h2 className="">Create Account</h2>
          <p>Join us today! Please fill in your details</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="country">Which country you belong</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={errors.country ? "error" : ""}
              placeholder="Enter your country"
            />
            {errors.country && <p className="error-message">{errors.country}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="country">Whrite a description about you (Your Bio) </label>
            <textarea
              rows={3}
              style={{
                minHeight: '60px',  // Approx height of 3 rows
                maxHeight: '120px', // Approx height of 6 rows
                overflowY: 'auto',
              }}
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className={errors.bio ? "error" : ""}
              placeholder="Enter your bio"
            />
            {errors.bio && <p className="error-message">{errors.bio}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="userRole">Who you are</label>
            <select
              id="userRole"
              name="userRole"
              value={formData.userRole}
              onChange={handleChange}
              className="border px-2 rounded w-full "
            >
              <option value="">-- Select an Option --</option>
              <option value="Athlete">Athlete</option>
              <option value="Doctor">Doctor</option>
              <option value="Organizer">Game Organizer</option>
            </select>
            {errors.userRole && <p className="error-message">{errors.userRole}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword.password ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "error" : ""}
                placeholder="Create a password"
              />
              <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
                {showPassword.password ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>

          {formData.userRole == 'Athlete' &&
            <>
              <div className="form-group">
                <label htmlFor="age">Your age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className={errors.age ? "error" : ""}
                  placeholder="Enter your age"
                />
                {errors.age && <p className="error-message">{errors.age}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="sport">Which sport you play</label>
                <input
                  type="text"
                  id="sport"
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  className={errors.sport ? "error" : ""}
                  placeholder="Enter your sport"
                />
                {errors.sport && <p className="error-message">{errors.sport}</p>}
              </div>
            </>
          }

          <button type="submit" className="submit-button">
            <UserPlus size={20} />
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;


{/* 
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className={errors.bio ? "error" : ""}
              placeholder="Write bio"
            />
            {errors.bio && <p className="error-message">{errors.bio}</p>}
          </div> */}
{/* 
          <div className="form-group">
            <label htmlFor="expertise">Expertise</label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              className={errors.expertise ? "error" : ""}
              placeholder="Write expertise"
            />
            {errors.expertise && <p className="error-message">{errors.expertise}</p>}
          </div> */}