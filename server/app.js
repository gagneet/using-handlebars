import express from 'express';
import mongoose from 'mongoose'; // Or use MySQL

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.get('/data', (req, res) => {
  // Fetch data from the database and send it to the frontend
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
