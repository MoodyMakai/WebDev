const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let people = [
    {firstName: 'bob', lastName: 'jone'}
];


app.use(express.urlencoded({extended:false}))

function htmlStart(res){
    res.write(`<!DOCTYPE html>
        <head>
            <title>xedni</title>
        </head>
        <body>`)
};

function htmlEnd(res){
    res.end(`</body>
    </html>`)
};
console.log("check");
app.get('/', (req,res) => {
    htmlStart(res,'funypage')
    res.write(`
      <p> ${req.query.firstName} ${req.query.lastName}</p>
    `);
    htmlEnd(res);
});
app.post('/', (req,res) => {
    people.push({firstName: req.body.firstName, lastName: req.body.lastName})
    const indexE = people.length;
    if (indexE > 3) {
        people.splice(0,1); 
    }
    htmlStart(res)
    res.write(`
      <p> Salut ${req.body.firstName} ${req.body.lastName} </p>
    `);
    for (let peep of people) {
        res.write(`<p>${peep.firstName}.${peep.lastName}</p>`)
    }
    htmlEnd(res)

});

app.listen(port, () => {
    console.log(`AHHHHHHHHHHHHHHHHHHH (on port ${port})`)
})