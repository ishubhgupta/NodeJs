const express = require('express');
const app = express();

app.get('', (req, resp)=>{
    console.log("data sent by browser = ", req.query.name)
    resp.send("Hello " + req.query.name);
});
app.get('/about', (req, resp)=>{
    resp.send("Hello World from about");
});

app.get('/help', (req, resp)=>{
    resp.send("Hello World from help page!!");
});

app.listen(4500);