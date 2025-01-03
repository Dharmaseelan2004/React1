var express = require('express');
var path = require('path');
var mdb = require('mongoose');
var users = require('./models/users');
var app = express();
const PORT = 3001;

app.use(express.json());

mdb.connect("mongodb://localhost:27017/")
    .then(() => {
        console.log("MongoDB Connection successful");
    })
    .catch((err) => {
        console.log("Check Your Connection String", err);
    });

app.get('/', (req, res) => {
    res.send("Welcome to Backend Server");
});

app.get('/json', (req, res) => {
    res.json({ Server: "Welcome to Backend", Url: "Localhost", port: "3001" });
});

app.post('/signup', async (req, res) => {
    var { FirstName, LastName, Email, password } = req.body;

    console.log(FirstName, LastName, Email, password);

    try {
        var newUser = new users({
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            password: password
        });
        await newUser.save();
        console.log("User Added Successfully");
        res.status(200).send("User Added Successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error adding user");
    }
});

app.get('/dharma', (req, res) => {
    res.sendFile(path.join('E:', 'React1', 'vite-project', 'index.html'));
});

app.get('/getsignup', async (req, res) => {
    try {
        var allsignupRecords = await users.find();
        res.json(allsignupRecords);
        console.log("All Data fetched");
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

app.post('/login', async (req, res) => {
    var { email, password } = req.body;
    try {
        var existingUser = await users.findOne({ email: email });
        if (existingUser) {
            if (existingUser.password !== password) {
                res.json({ message: "Invalid Credentials", isloggedIN: false });
            } else {
                res.json({ message: "Login Successful", isloggedIN: true });
            }
        } else {
            res.json({ message: "Login Failed", isloggedIN: false });
        }
    } catch (err) {
        console.log("Login Failed", err);
        res.status(500).send("Login Failed");
    }
});

app.listen(PORT, () => {
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
});
