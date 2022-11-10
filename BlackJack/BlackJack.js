const express = require('express');
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

function htmlStart(res){
    res.write(`<!DOCTYPE html>
    <head>
        <title>Document</title>
        <link rel="stylesheet" href="server.css" type="text/css">
    </head>
    <body>
`);
}
function htmlEnd(res){(`
    </body>
    </html>
`)}


app.get("/" (req,res) => {
    res.json('blank')
});

app.post("/hit" (req,res) => {
    res.json('blank')
});






app.listen(port, () => {
    console.log(`server on ${port}`)
});