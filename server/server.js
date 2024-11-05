const express = require('express');
const app = express();

const port = process.env.PORT || 3030;

app.use('/', (req, res) =>{
    res.send('test route running')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});