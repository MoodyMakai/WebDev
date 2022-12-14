const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const sessions = require('express-session')
/*app.use('/homepage.html', (req,res,next)=> {
    if (gUse === true){
        next()
    }else{
        res.redirect('/login.html')
    }
})*/
app.use(express.static('public'));
app.use(urlencoded({ extended: false }));
app.use(sessions({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))

function htmlStart(res) {
    res.write(`<!DOCTYPE html>
        <head>
            <title>posts</title>
        </head>
        <body>`)
};

function htmlEnd(res) {
    res.end(`</body>
    </html>`)
}



let loginData = [{ firstName: "", lastName: "", username: "", password: "", }];
let postData = [];
let userData = [];

var gUse = false


app.post('/register', (req, res) => {
    loginData.push({
        firstName: req.body.FirstName,
        lastName: req.body.LastName,
        username: req.body.Username,
        password: req.body.Password
    })
    console.log(loginData)
    if (req.body.Username === "" || req.body.Password === "") {
        res.redirect('register.html')
        //create alert somehow
    } else {
        res.redirect("login.html")
    }
});


app.post('/login', (req, res) => {
    for (let x of loginData) {
        if (x.username === req.body.usernameTry && x.password === req.body.passwordTry) {
            session = req.session;
            req.session.userid = req.body.usernameTry;
            //postData.push({userid:req.session.userid})
            console.log(req.session)
            res.redirect('homepage.html')
            return
        }
    }
    res.redirect('register.html')
});
var session;

app.post('/homepage', (req, res) => {
    postData.push({ Post: req.body.Post })
    console.log(postData);
    try {
        const fs = require("fs");
        let jsonString = JSON.stringify(postData);
        console.log("original:");
        console.log(jsonString);
        fs.writeFileSync("postData.json", jsonString);
        let jsonStringFromFile = fs.readFileSync('postData.json', { encoding: 'utf8' });
        console.log("fromFile:");
        console.log(jsonStringFromFile);
        let dataFromFile = JSON.parse(jsonStringFromFile);
        console.log("After JSON.parse");
        console.log(dataFromFile);
    }
    catch(err) { console.log('alas no file') }
    htmlStart(res)
    res.write(` <link rel="stylesheet" href="homepage.css" type="text/css">`)
    for (let p of postData) {
        res.write(`<ul>
            <li>${p.Post}: From ${req.session.userid}</li>
            </ul>`)
    }
    res.write(`
    <button onclick = "deletePost()"> Delete Post</button>
    `)
    htmlEnd(res)
});






app.listen(port, () => {
    console.log(`AHHHHHHHHHHHHHHHHHHH (on port ${port})`)
})