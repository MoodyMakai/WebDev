const express = require('express');
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

function htmlStart(res){
    res.write(`<!DOCTYPE html>
    <head>
        <title>Document</title>
    </head>
    <body>
`);
}
function htmlEnd(res){(`
    </body>
    </html>
`)}

app.get('/', async (req,res)=>{
    htmlStart(res);
    res.write(`<h1> Schools </h1>`)
    let scRes = await fetch('http://localhost:3080/schools')
    let data = await scRes.json(); 
    let n = 0
    for (let schools of data){
        res.write(`<ol>${schools}</ol>`)
        //console.log(schools)
        let stRes = await fetch('http://localhost:3080/students')
        let data2 = await stRes.json()
        res.write(`<ol>${data2[n]}</ol>`)
        n++
        console.log(n)
        }})














 /* for(let students of data2){
            console.log(students)
            res.write(`<ol>${students}</ol>`)
            data2.splice(0);
            break;
        }*/


        
        







app.listen(port, () => {
    console.log(`server on ${port}`)
});