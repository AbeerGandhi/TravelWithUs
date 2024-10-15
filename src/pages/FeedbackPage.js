import React, { useState } from "react";
import "./FeedbackPage.css"; // Import the associated CSS for styling

// Sample feedback data
const feedbackData = [
  {
    name: "John Doe",
    img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2299", // Replace with actual image path
    location: "New York, USA",
    feedback: "Absolutely loved the experience! The service was top-notch, and I will definitely be coming back.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Jane Smith",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=uHzeaBv3V2z6Tp6wvhzGABlTs9HR-SP-tEX1UbYNn4Q", // Replace with actual image path
    location: "London, UK",
    feedback: "A fantastic experience from start to finish. Everything was well organized, and the staff was very friendly.",
    rating: "⭐⭐⭐⭐",
  },
  {
    name: "Rahul Patel",
    img: "https://avatars.githubusercontent.com/u/744487?v=4", // Replace with actual image path
    location: "Mumbai, India",
    feedback: "Good value for money, but I felt some areas could have been improved. Overall, it was a pleasant experience.",
    rating: "⭐⭐⭐",
  },
  {
    name: "Maria Garcia",
    img: "https://apiumhub.com/wp-content/uploads/2021/02/Monica.jpg", // Replace with actual image path
    location: "Barcelona, Spain",
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
