console.log("Testing");
let screen = document.getElementById('Screen');
console.log(screen);

var screenVal="";
function takeInput(n) {
  screenVal+=n;
screen.innerText+=n;
console.log(screenVal);


}
function clearScreen(){
    screen.innerText="";
    screenVal="";
    
}
function backspace(){
    let arr= screenVal.split("");
    console.log(arr);
    arr.pop();
    screen.innerText="";
    screenVal="";
    for(var i=0;i<arr.length;i++){
        
        screen.innerText+=arr[i];
        screenVal+=arr[i];
        console.log(screenVal);
    }
    
}
let price = document.getElementById('price');
let litres = document.getElementById('litres');
let start = document.getElementById('btn-start');
let clear = document.getElementById('btn-clear');
clear.addEventListener('click',function(){
    price.innerText="0.00";
    litres.innerText="0.00";
    screen.innerText="";
    screenVal="";
})

start.addEventListener('click',function(){
 var priceVal=parseFloat(screenVal);
 var litresVal=(priceVal/80).toFixed(2);
 console.log(litresVal);
 console.log(typeof(priceVal));
 let Pricecount=0.0;
 
 setInterval(()=>{
    if(Pricecount<=priceVal){
        price.innerText=Pricecount;
        Pricecount++;
        
    }
 },25);
  Litrescount=0;
 setInterval(()=>{
    if(Litrescount<=litresVal){
        litres.innerText=Litrescount.toFixed(2);
        Litrescount+=0.01;
        
    }
 },50);


});


