const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const notesRoutes = require('./routes/notes');

const app = express();
const port = process.env.APP_PORT || 3309; // Changed port to 3001

app.use(bodyParser.json());
app.use('/api', notesRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
