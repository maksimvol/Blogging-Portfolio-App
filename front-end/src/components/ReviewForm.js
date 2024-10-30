import React, { useState } from 'react';
import '../styles/ReviewForm.css';

const ReviewForm = ({ onReviewSubmitted }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = { name, email, review };
        onReviewSubmitted(newReview);

        setName('');
        setEmail('');
        setReview('');
    };

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-input"
            />
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
            />
            <textarea
                placeholder="Your Review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
                className="form-textarea"
            />
            <button type="submit" className="submit-button">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
