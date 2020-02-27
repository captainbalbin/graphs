const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
app.use(logger);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// A way to do it but not the best way
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
