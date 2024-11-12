const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 8000;


router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Use an absolute path to the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
