let clickCount = count = 0
function changeColor(obj){
    clickCount = count +=1;
    console.log(clickCount);
    
    if (clickCount % 2 == 0){
        console.log(obj);
    obj.style.backgroundColor="blue";
    } else {
        console.log(obj);
    obj.style.backgroundColor="red";
    }
    

 }

 function clearColor(){
    
    document.getElementById('1').style.backgroundColor='';
    document.getElementById('2').style.backgroundColor='';
    document.getElementById('3').style.backgroundColor='';
    document.getElementById('4').style.backgroundColor='';
    document.getElementById('5').style.backgroundColor='';
    document.getElementById('6').style.backgroundColor='';
    document.getElementById('7').style.backgroundColor='';
    document.getElementById('8').style.backgroundColor='';
    document.getElementById('9').style.backgroundColor='';

 }

 

