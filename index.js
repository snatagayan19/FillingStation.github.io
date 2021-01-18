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
let priceVal=0.00;
let litresVal=0.00;
clear.addEventListener('click',function(){
    price.innerText="0.00";
    litres.innerText="0.00";
    screen.innerText="";
    screenVal="";
    priceVal=0.00;
    litresVal=0.00;


})

start.addEventListener('click',function(){
    
  priceVal=parseFloat(screenVal);
 console.log(priceVal);
  litresVal=(priceVal/80).toFixed(2);
 console.log(litresVal);
 console.log(typeof(priceVal));
 let Pricecount=0;
 Litrescount=0.00;
  
   setInterval(()=>{
    if(Pricecount<=priceVal){
        price.innerText=Pricecount;
        if(Litrescount<=Pricecount/80){
            litres.innerText=Litrescount.toFixed(2);
            Litrescount+=0.0125;
            
        }
        Pricecount++;
        clear.disabled=true;
         start.disabled=true;
    }
 },325);  //300
 setTimeout(()=>{
    clear.disabled=false;
   start.disabled=false;
    console.log("disable")
 },325*(priceVal+1));
  
  
});

    




