const express = require('express');
const mongoose = require('mongoose');
const router = require('./router/plan')

const app = express();
const PORT = 3000;

// Middleware to parse JSON (for POST/PUT requests)
app.use(express.json());

// MongoDB connection string
const mongoURI = 'mongodb+srv://alishasatheesan1992:LJK634wAqISRlQ94@cluster0.p93um.mongodb.net/travelPlan';

// Connect to mongodb
mongoose.connect(mongoURI)
.then(() => console.log("Connected to MongoDB!"))
.catch( (err) => console.error("Error: ", err))

app.get('/', (req, res) => {
    res.send("Hello1");
})

app.use('/plan', router);

app.listen(PORT, () => console.log(`You are listering at port ${PORT}`));