'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Settings() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePic, setProfilePic] = useState('/default-profile-pic.jpg');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const router = useRouter();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // Basic password strength evaluation
    if (newPassword.length < 6) setPasswordStrength('Weak');
    else if (newPassword.length < 12) setPasswordStrength('Moderate');
    else setPasswordStrength('Strong');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle form submission logic
    router.push('/dashboard');
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Settings</h1>
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300">
              <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="ml-4">
              <label htmlFor="profilePic" className="block text-blue-500 hover:underline cursor-pointer">
                Change Profile Picture
              </label>
              <input
                id="profilePic"
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="hidden"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">New Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <p className={`mt-2 text-sm ${passwordStrength === 'Strong' ? 'text-green-600' : 'text-red-600'}`}>
                Password Strength: {passwordStrength}
              </p>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="notifications"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="notifications" className="text-gray-700">Enable Notifications</label>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="twoFactorAuth"
                checked={twoFactorAuth}
                onChange={(e) => setTwoFactorAuth(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="twoFactorAuth" className="text-gray-700">Enable Two-Factor Authentication</label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
