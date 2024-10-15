import React, { useState } from "react";
import "./ReviewSection.css";

export const ReviewSection = () => {
  const [review, setReview] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      setIsSubmitted(true); // Show submission message
      setReview(""); // Clear the input field
      setTimeout(() => {
        setIsSubmitted(false); // Reset submission message after a delay
      }, 3000); // Adjust the delay as needed
    }
  };

  return (
    <section className="home review-section" id="reviews">
      <div className="content">
        <h3>Share Your Travel Experience</h3>
        <p>We value your feedback! Please leave a review below:</p>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="review-form">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
              rows="5"
            ></textarea>
            <button className="exp-btn" type="submit">
              Submit Review
            </button>
          </form>
        ) : (
          <p className="submission-message">
            Review submitted and will appear shortly!
          </p>
        )}
      </div>
    </section>
  );
};
