import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Confirmation() {
  const handleGiveFeedbackClick = () => {
    // Redirect to the home page when the button is clicked
    window.location.href = '/';
  };

  return (
    <div id='main'>
      <Navbar />
      <div className='name'>
        <h1>
          <span>Thank you</span> <br />For your feedback
        </h1>
        <p className='details'>
          If you wish to give another feedback, please click on the button below.
        </p>
        <button className='btn' onClick={handleGiveFeedbackClick}>
          Give Feedback
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
