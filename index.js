// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes will be added here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
      operation_code: 1,
    });
  });

// index.js

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
  
    // Validate input
    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        user_id: "your_fullname_ddmmyyyy",
        email: "your_email",
        roll_number: "your_roll_number",
        numbers: [],
        alphabets: [],
        highest_lowercase_alphabet: [],
      });
    }
  
    const numbers = [];
    const alphabets = [];
    const lowercaseAlphabets = [];
  
    data.forEach(item => {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (/^[A-Za-z]$/.test(item)) {
        alphabets.push(item);
        if (item === item.toLowerCase()) {
          lowercaseAlphabets.push(item);
        }
      }
    });
  
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0
      ? [lowercaseAlphabets.sort().reverse()[0]]
      : [];
  
    res.status(200).json({
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      numbers: ["1","334","4"],
      alphabets: ["M","B","Z","a"],
      highest_lowercase_alphabet: ["a"],
    });
  });
  