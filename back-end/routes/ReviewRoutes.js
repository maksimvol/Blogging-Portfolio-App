const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Get all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Add a new review
router.post('/', async (req, res) => {
    const { name, email, review } = req.body;
    if (name && email && review && review.length > 0) {
        try {
            const newReview = new Review({ name, email, review });
            await newReview.save();
            res.status(201).json({ message: 'Review added successfully!' });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.status(400).json({ message: 'Name, email and review are required.' });
    }
});

module.exports = router;
