const express = require("express");
const app = express(); 
const path = require('path');
const morgan = require('morgan');
const businessesRouter = require('./routes/businessesRouter');

app.use(morgan('dev'));

app.use(express.static(path.join('build')));

app.use(businessesRouter);

app.get("/*", (req, res) => {
    res.sendFile(path.resolve('build/index.html'));
});

app.listen(8080, () => { console.log("server started on port 8080") });