
import React, { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import "./Login.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

const Login: React.FC = ({toggleAuthApi, settoggleAuthApi} : any) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const result = await axios.post("http://localhost:5000/login", formData);
        console.log("Form submitted:=======", result.data);
        if(result.data){
          localStorage.setItem("athlete_web_token", result?.data.token);
          localStorage.setItem("athlete_web_user_id", result?.data.user_id);
          settoggleAuthApi(!toggleAuthApi);
          navigate('/');
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
                placeholder="Enter your password"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>

          <button type="submit" className="submit-button">
            <LogIn size={20} />
            Sign In
          </button>
        </form>

        <p className="signup-link">
          Don't have an account? 
          <Link to={"/sign-up"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

