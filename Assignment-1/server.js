const express = require('express');
const fs = require('fs');

const app = express();

// Middleware
app.use((req, res, next) => {

    console.log(`Request Time: ${new Date()}`);
    console.log(`Request IP: ${req.ip} `);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Protocol: ${req.protocol}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Host Name: ${req.hostname}`);
   

    // Add these to a file named requests.log using fs module in JSON format
    const log = {
        'Request Time': `${new Date()}`,
        'Request IP': `${req.ip}`,
        'Request URL': `${req.url}`,
        'Request Protocol': `${req.protocol}`,
        'Request Method': `${req.method}`,
        'Host Name': `${req.hostname}`,
        'Request Query' : `${req.query}`,
        'Request Headers' : `${req.headers}`,
        'User Agent' : `${req.get('User-Agent')}`
    };
    fs.appendFileSync('requests.log', JSON.stringify(log) + '\n');
    console.log('Request Logged');

});

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/about',(req,res)=>{
    res.send('About Us');
});

app.get('/contact',(req,res)=>{ 
    res.send('Contact Us');
});


app.listen(8085,()=>{
    console.log('Server is running on port 8085');
}); 