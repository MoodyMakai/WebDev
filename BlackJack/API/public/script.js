let standing = document.getElementById("standB");
standing.addEventListener("click", () => {
    console.log('standing'), 
    fetch('http://localhost:3080/stand',{
    method: 'Post' 
    
})})

let hitting = document.getElementById("hitB");
hitting.addEventListener("click", () => {
    console.log('hitting'), 
    fetch('http://localhost:3080/hit',{
    method: 'Post' 
})})

let reseting = document.getElementById("resetB");
reseting.addEventListener("click", () => {
    console.log('reseting'), 
    fetch('http://localhost:3080/reset',{
    method: 'Post' 
})})

