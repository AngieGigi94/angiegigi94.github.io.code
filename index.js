const express = require('express');
const app = express();
const path = require('path');

// app.get('/', (req, res) => res.send('Hello World!'));

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(8080, () => console.log('app listening on port 8080!'));
