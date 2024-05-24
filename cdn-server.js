// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
app.use(express.urlencoded({ extended: true })); 

const publicKey = fs.readFileSync('./public_key.pem', 'utf8');

function verify(message, signature){
    const verifier = crypto.createVerify('RSA-SHA256');
    verifier.update(message);
    const isSignatureValid = verifier.verify(publicKey, signature, 'base64');
    
    return isSignatureValid;
}

app.get('/imgs/*', (req, res) => {
    const signature = decodeURIComponent(req.query.signature);
    const expiry = req.query.expiry;
    const pathWithoutQuery = req.originalUrl.split('?')[0];

    // Construct the full URL without query parameters
    const fullUrl = `${req.protocol}://${req.get('host')}${pathWithoutQuery}`;
    const message = `${fullUrl}-${expiry}`;

    if(verify(message, signature) && Date.now() < +expiry){
        res.sendFile(path.join(__dirname, 'public', 'imgs', req.params[0]));
        return;
    }
    res.status(403).send('Access Denied');
})

const port = 4000;
app.listen(port);
console.log(`Server started at http://cdn.company.com:${port}`);
