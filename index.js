const express = require('express');
const users = require('./routes/users');

const app = express();

app.get('/', users);

app.listen(3000, () => {
    console.log('App running on port 3000')
})