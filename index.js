const express = require('express');
const app = express();

app.get('', (req, resp)=>{
    console.log("data sent by browser = ", req.query.name)
    resp.send(` <h1>Hello</h1>   ${req.query.name}
        <a href="/about">Go to about page</a>`
    );
});
app.get('/about', (req, resp)=>{
    resp.send("Hello World from about");
});

app.get('/help', (req, resp)=>{
    resp.send("Hello World from help page!!");
});

app.listen(4500);