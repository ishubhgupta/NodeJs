const express = require('express');
const path = require('path');
const app = express();

const dirPath = path.join(__dirname, 'public');
console.log(dirPath);

// app.use(express.static(dirPath));

app.get('', (req, resp)=>{
    resp.sendFile(`${dirPath}/index.html`);
})
app.get('/about', (req, resp)=>{
    resp.sendFile(`${dirPath}/about.html`);
})
app.get('*', (req, resp)=>{
    resp.sendFile(`${dirPath}/nopage.html`);
})

app.listen(4500);