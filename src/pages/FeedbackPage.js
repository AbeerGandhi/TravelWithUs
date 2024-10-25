import React, { useState } from "react";
import "./FeedbackPage.css"; // Import the associated CSS for styling

// Sample feedback data
const feedbackData = [
  {
    name: "Abeer Gandhi",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", // Replace with actual image path
    location: "Nagpur,India",
    feedback: "Absolutely loved the experience! The service was top-notch, and I will definitely be coming back.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Devensingh Chauhan",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", // Replace with actual image path
    location: "Aurangabad,India",
    feedback: "A fantastic experience from start to finish. Everything was well organized, and the staff was very friendly.",
    rating: "⭐⭐⭐⭐",
  },
  {
    name: "Aman Patne",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", // Replace with actual image path
    location: "Nagpur, India",
    feedback: "Good value for money, but I felt some areas could have been improved. Overall, it was a pleasant experience.",
    rating: "⭐⭐⭐",
  },
  {
    name: "Mrityunjay Gupta",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", // Replace with actual image path
    location: "Gondia,India",
    feedback: "An incredible trip! The accommodations were wonderful, and I enjoyed every moment of it.",
    rating: "⭐⭐⭐⭐⭐",
  },
];

export const FeedbackPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission (you can add an API call here)
    console.log("Feedback submitted:", { name, email, feedback });
    
    // Reset form fields and show submission message
    setName("");
    setEmail("");
    setFeedback("");
    setIsSubmitted(true);
  };

  return (
    <section className="feedback-page">
      <div className="feedback-container">
        <h2>Feedback Form</h2>
        {isSubmitted && <p className="success-message">Thank you for your feedback!</p>}
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="feedback">Feedback:</label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="feedback-btn">Submit</button>
          </form>
        )}
      </div>

      {/* Section for displaying user feedback in horizontal layout */}
      <div className="user-feedback-section">
        <h2>Some Feedbacks From Our Users</h2>
        <div className="feedback-list">
          {feedbackData.map((userFeedback, index) => (
            <div key={index} className="feedback-item">
              <img
                src={userFeedback.img}
                alt={`${userFeedback.name}'s feedback`}
                className="feedback-avatar"
              />
              <div className="feedback-info">
                <h3>{userFeedback.name}</h3>
                <p className="feedback-location">{userFeedback.location}</p>
                <p className="feedback-text">"{userFeedback.feedback}"</p>
                <p className="feedback-rating">{userFeedback.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
