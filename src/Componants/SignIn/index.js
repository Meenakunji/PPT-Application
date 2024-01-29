// GoogleSignInButton.js
import React from 'react';
import './style.css'; // Import the CSS file here

const GoogleSignInButton = ({handleStep, step}) => {
  // Handler for button click event
  const handleSignInClick = () => {
    // Logic to handle sign in...
    console.log('Sign in with Google clicked');
    handleStep(step);
  };

  return (
    <div className="google-sign-in-container">
      <button className="google-sign-in-button" onClick={handleSignInClick}>
        <p>Sign in with Google</p>
      </button>
    </div>
  );
};

export default GoogleSignInButton;
