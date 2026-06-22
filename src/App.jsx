import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [users, setUsers] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.name && formData.email) {
      setUsers([
        ...users,
        {
          name: formData.name,
          email: formData.email
        }
      ]);

      setShowSuccess(true);

      setFormData({
        name: '',
        email: '',
        password: ''
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="container">
      <div className="registration-card">
        <h2>Registration Form</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <button type="submit">Register</button>
        </form>

        {showSuccess && (
          <p className="success-text">
            Registration Successful!
          </p>
        )}

        <div className="user-list-section">
          <h3>Registered Users</h3>

          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;