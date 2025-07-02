const express = require('express');
const app = express();
const userRoutes = require('./router/router');

app.use(express.json());
app.use(userRoutes);

app.listen(3000, () => {
    console.log('çalıştı');
});