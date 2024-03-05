// server.js
const express = require('express');
const path = require('path');
const uuid = require('uuid');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Use cookie-parser middleware

const privateKey = fs.readFileSync('./private_key.pem', 'utf8');

const users = {
    'alice': 'password123',
    'bob': 'secret456',
  };

const tokenToUsers = {};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if(password === users[username]){
        const token = uuid.v4();
        tokenToUsers[token] = username;
        res.cookie('authToken', token).redirect('/dashboard');
        return;
    }
    res.status(401).send('Invalid username or password.');
});

app.get('/dashboard', (req, res) => {
    const user = tokenToUsers[req.cookies.authToken];
    if(!user){
        res.redirect('/');
        return;
    }
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

function signMessage(message){
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(message);
    return sign.sign(privateKey, 'base64');
}

app.get('/api/signed-asset-url', (req, res) => {
    const user = tokenToUsers[req.cookies.authToken];
    if(!user){
        res.status(401).send('Unauthenticated.');
        return;
    }

    const fiveSeconds = 5 * 1000;
    const expiry = Date.now() + fiveSeconds;
    const message = `${req.query.assetUrl}-${expiry}`;
    const signature = signMessage(message);

    // console.log('created signature', signature);
    
    res.redirect(`${req.query.assetUrl}?signature=${encodeURIComponent(signature)}&expiry=${expiry}`);
});

app.post('/logout', (req, res) => {
    res.clearCookie('authToken').redirect('/');
});

const port = 3000;

app.listen(port);
console.log(`Server started at http://app.company.com:${port}`);
