import React, { useState } from 'react';
import { useAuthStore } from '../../stores/authStore';

const AdminProfile = () => {
  const { user } = useAuthStore();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    // Here you would typically call an API to change the password
    // For this demo, we'll just show a success message
    setMessage('Password changed successfully');
    setNewPassword('');
    setConfirmPassword('');
  };

  if (!user) {
    return <div className="bg-gray-900 min-h-screen text-white p-8">Loading...</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Profile</h1>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-300">{user.email}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">User ID</h2>
          <p className="text-gray-300">{user.id}</p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <form onSubmit={handlePasswordChange}>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            Change Password
          </button>
        </form>
        {message && <p className="mt-4 text-green-400">{message}</p>}
      </div>
    </div>
  );
};

export default AdminProfile;