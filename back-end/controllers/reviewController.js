const addReview = (req, res) => {
    const { name, email, review } = req.body;
    res.status(200).json({ message: 'Review received!', name, email, review });
};

module.exports = { addReview };
