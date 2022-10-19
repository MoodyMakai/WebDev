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
app.use(urlencoded({extended: false}));
app.use(sessions({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false}
  }))

function htmlStart(res){
    res.write(`<!DOCTYPE html>
        <head>
            <title>posts</title>
        </head>
        <body>`)
};

function htmlEnd(res){
    res.end(`</body>
    </html>`) }



let loginData = [{firstName: "", lastName: "", username: "", password: "",}];
let postData = [];

var gUse = false


app.post('/register', (req, res) =>{
    loginData.push({firstName:req.body.FirstName, 
                    lastName:req.body.LastName, 
                    username:req.body.Username, 
                    password:req.body.Password})
    console.log(loginData)
    if (req.body.Username === "" || req.body.Password === ""){
        res.redirect('register.html')
        //create alert somehow
        }else {
    res.redirect("login.html")}
});


app.post('/login', (req,res)=>{
    for (let x of loginData){
        if(x.username === req.body.usernameTry && x.password === req.body.passwordTry){
        session=req.session;
        req.session.userid=req.body.username;
        console.log(req.session)
            res.redirect('homepage.html')
            return
        }
    } 
    res.redirect('register.html')
}); 
 var session;

app.post('/homepage', (req,res)=>{
    postData.push({Post:req.body.Post})
    console.log(postData);
    htmlStart(res)
    for (let p of postData){
        res.write(`<ul>
            <li>${p.Post}: From ${userid}</li>
            </ul>`) 
    }
    htmlEnd(res)
});






app.listen(port, () => {
    console.log(`AHHHHHHHHHHHHHHHHHHH (on port ${port})`)
})