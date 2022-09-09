const words = ['mouse','money','malice','marge' ];

let clickCount = count = 0


for(let I of words) {
const a = document.createElement("p");
const b = document.createTextNode(I);
a.addEventListener('click', colorFun)
a.appendChild(b);
const bod = document.getElementById("div1");
bod.appendChild(a);
function colorFun() {
    clickCount = count +=1;
   console.log(clickCount);
   if (clickCount % 2 == 0){
    a.style.color = "red";
} 
else {
    a.style.color = "blue";
}
};
}

