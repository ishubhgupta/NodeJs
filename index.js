const express = require('express');
const app = express();

app.get('', (req, resp)=>{
    resp.send("Hello World");
});
app.get('/about', (req, resp)=>{
    resp.send("Hello World from about");
});

app.get('/help', (req, resp)=>{
    resp.send("Hello World from help page!!");
});

app.listen(4500);