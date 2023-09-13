import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to a server for processing.
    // For simplicity, we'll just simulate a successful submission and redirect.

    // Simulate a successful submission (you can replace this with actual API calls)
    setTimeout(() => {
      window.location.href = '/confirmation';
    }, 1000);// Simulated delay for 1 second
  };

  return (
    <div className='b-box'>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <br /><br />

        <label htmlFor="feedback">Feedback:</label><br />
        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleInputChange}
          required
        ></textarea>
        <br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
