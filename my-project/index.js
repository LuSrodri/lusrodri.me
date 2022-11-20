const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile('./build/index.html', { root: __dirname });
});

app.use(express.static('build'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});