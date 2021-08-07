const express = require('express');
const cors = require('cors');
const Authentication = require('./middlewares/static');
const FixedAuthentication = require('./middlewares/fixed');
require('dotenv').config()
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// setting up the PORT
const PORT = process.env.PORT || 8001;
app.get('/static', Authentication.ensureRole('customer'), async (req, res) => {
    try {
        res.status(200).send({
            message: `Congratulations! You made it. Your role is ${req.role}`
        })
    } catch (error) {
        res.status(500).send({
            error: 'Internal server error'
        })
    }
})
app.get('/fixed', FixedAuthentication.Admin, async (req, res) => {
    try {
        res.status(200).send({
            message: `Congratulations! You made it. Your role is ${req.role}`
        })
    } catch (error) {
        res.status(500).send({
            error: 'Internal server error'
        })
    }
})
app.listen(PORT, () => {
    console.log(`server is listening at PORT ${PORT}`)
});
