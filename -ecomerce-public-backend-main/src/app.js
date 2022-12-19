import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(function (req, res, next) {


    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');


    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    res.setHeader('Access-Control-Allow-Credentials', true);


    next();
});

const auth = require("./routes/auth");
app.use("/api/v1", auth);

export default app;