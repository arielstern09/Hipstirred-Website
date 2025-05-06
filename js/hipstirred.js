let dt = new Date();
let hr = dt.getHours();
console.log('hr:',hr);

let greeting ="";
if(hr<12){
    greeting ="Good Morning";
}else if(hr<18){
    greeting ="Good Afternoon";
}else{
    greeting ="Good Evening";
}

let timelyGreetingdiv = document.getElementById("timely-greeting");
timelyGreetingdiv.textContent =greeting;