const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const reviewRoutes = require('./routes/ReviewRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
