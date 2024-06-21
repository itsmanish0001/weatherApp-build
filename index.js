const express = require('express');
const app = express();
const port = process.env.PORT ||  3000;

// Define a simple route
app.get('/api/user', (req, res) => {
  res.send('Hello, world! i am manish');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
