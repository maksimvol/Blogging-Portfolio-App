import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';
import About from '../components/About';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import '../styles/Home.css';

const Home = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/reviews');
                setReviews(response.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };
        fetchReviews();
    }, []);

    const handleNewReview = async (newReview) => {
        try {
            const response = await axios.post('http://localhost:5000/api/reviews', newReview);
            setReviews([...reviews, response.data]);
        } catch (error) {
            console.error("Error adding review:", error);
        }
    };

    return (
        <Layout>

        <About />

            <h2>Reviews</h2>
            {reviews.length === 0 ? (
                <p>Hey. Be the first one to write your review! Don't waste your time!!!</p>
            ) : (
            <ul className="reviews-list">
                {reviews.map((review, index) => (
                    <li key={index} className="review-item">
                        <div className="review-label"><strong>Name:</strong></div>
                        <div className="review-name"><strong>{review.name}</strong></div>
                        <div className="review-label"><strong>Email:</strong></div>
                        <div className="review-email">
                <strong>
                    {review.email 
                        ? review.email.replace(/^[^@]+/, (match) => "*".repeat(match.length)) 
                        : "N/A"
                    }
                </strong>
            </div>
                        <div className="review-label"><strong>Review:</strong></div>
                        <div className="review-text">{review.review}</div>
                    </li>
                ))}
            </ul>
            )}

            <Contact />

            <div className="centered-container">
                <ReviewForm onReviewSubmitted={handleNewReview} />
            </div>
        </Layout>
    );
};

export default Home;
