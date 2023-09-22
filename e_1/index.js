const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const dbUrl = 'mongodb://0.0.0.0/register'; // Update the MongoDB URL

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));


app.post("/Login.html", (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;


    var data = {
        "username": username,
        "password": password,
        "email": email


    }

    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");

    });
    return res.redirect('Login.html')
})


//////////////////////////////////

app.post("/Home.html", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check if the provided credentials match any stored data
    db.collection('users').findOne({ "username": username, "password": password }, (err, result) => {
        if (err) {
            throw err;
        }

        if (result) {
            // res.send("Login successful");
            return res.redirect('Home.html');

        } else {
            res.status(401).send("Invalid credentials. Please try again.");
        }
    });
});


app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('Account.html')
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});