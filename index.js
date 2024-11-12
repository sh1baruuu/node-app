const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// Use an absolute path to the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
