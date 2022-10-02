const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));
let loginData = [{}];

app.get('/register', (req, res) =>
{loginData.push({firstName:req.body.firstName, 
                lastName:req.body.lastName, 
                username:req.body.username, 
                password:req.body.password})
                res.redirect("login.html")
            });


console.log(loginData)







app.listen(port, () => {
    console.log(`AHHHHHHHHHHHHHHHHHHH (on port ${port})`)
})