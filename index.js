console.log('hello3');

try {
throw new Error("WHat?"); 
}

catch (err){
    console.log("error found" + err.message);
}