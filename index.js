const express = require('express');
const path = require('path');
const app = express();

const dirPath = path.join(__dirname, 'public');
// console.log(dirPath);

// app.use(express.static(dirPath));
app.set('view engine', 'ejs')

const reqFilter = (req, resp, next)=>{
    if(!req.query.age){
        resp.send("Please Provide Age!!");
    }
    else if(req.query.age < 18){
        resp.send("You cannot acess this site");
    }
    else{
        next();
    }
   
}

app.use(reqFilter);

app.get('', (req, resp)=>{
    resp.sendFile(`${dirPath}/index.html`);
})
app.get('/about', (req, resp)=>{
    resp.sendFile(`${dirPath}/about.html`);
})
app.get('/profile', (req, resp)=>{
    const user = {
        name : 'Shubh Gupta',
        reg : '22BAIXX84',
        campus: 'Bhopal',
        skills: ['C++', 'python', 'nodejs']
    }
    resp.render('profile', {user});
})
app.get('/login', (req, resp)=>{
    resp.render('login');
})

app.get('*', (req, resp)=>{
    resp.sendFile(`${dirPath}/nopage.html`);
})

app.listen(4500);