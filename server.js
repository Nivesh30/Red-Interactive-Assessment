const express = require('express');
const cors = require('cors');
const app = express();
// can choose port number
const PORT = 3000; 

// data
const textContent = [
  {price: '$1,600', title: 'Deposit Bonus'}
];
app.use(cors({
  origin: ['http://127.0.0.1:5500'],
}));

// route to serve the text content
app.get('/api/page', (req, res) => {
  res.json(textContent);
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});