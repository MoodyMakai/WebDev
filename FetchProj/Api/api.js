const express = require('express');
const app = express()
const port = 3080

let schools = [ 
 'Lewiston High School',
 'Noble High School',
 'Bangor High School',
 'Bonny Eagle High School',
 'Oxford Hills Comprehensive High School',
 'Sanford High School',
 'Edward Little High School',
 'Sanford Middle School',
 'Scarborough High School',
 'Windham High School',
 'Brewer Community School',
 'South Portland High School',
 'Massabesic High School',
 'Portland High School',
 'Gorham High School',
 'Ellsworth Elementary-middle School',
 'Falmouth Elementary School',
 'Hampden Academy',
 'Bonny Eagle Middle School',
 'Windham Primary School',
 'Lewiston Middle School',
 'Westbrook Middle School',
 'Brunswick High School',
 'Kennebunk High School',
 'Deering High School',
 'Mt Ararat High School',
 'Biddeford High School',
 'Messalonskee High School',
 'Marshwood High School',
 'Skowhegan Area High School',
 'Mt Blue High School',
 'Camden Hills Regional High School',
 'Scarborough Middle School',
 'Brewer High School',
 'Caribou Community School',
]


console.log(schools[1])



let studentCount = [
    '1561', '1197', '1149', '1131', '1091', '1060', '1040', '959', '942', '933', '909', '908', '891', '888', '854', 
    '825', '813', '799', '793', '777', '776', '771', '757', '751', '749', '742', '738', '738', '736', '729', '722', 
    '709', '709', '705', '691'
]

console.log(studentCount)



app.get('blah/:blahId', (req,res)=>{
    req.params.weaponId
    res.json(blah);
})







app.listen(port, () => {
    console.log(`server on ${port}`)
});