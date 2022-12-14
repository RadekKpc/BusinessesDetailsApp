const express = require("express");
const app = express(); 
const path = require('path');
const morgan = require('morgan');
const businessesRouter = require('./routes/businessesRouter');

const env = process.env.NODE_ENV || 'development';

if(env == 'development') { 
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        next();
    })
}

app.use(morgan('dev'));

app.use(express.static(path.join('build')));

app.use(businessesRouter);

app.get("/*", (req, res) => {
    res.sendFile(path.resolve('build/index.html'));
});

app.listen(8080, () => { console.log("server started on port 8080") });