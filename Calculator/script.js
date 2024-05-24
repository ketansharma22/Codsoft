var num=document.querySelector(".number")
let i=0;
const arr=[];
do{
    arr[i]=i;
    i++;
}
while(i<10);

var v=""
var display=""
for(var j=0;j<10;j++){
    v+=`<div class='number'>${arr[j]}</div>`
}
document.querySelector(".numbers").innerHTML=v;
document.querySelector(".display").innerHTML=display

num.addEventListener('click',function(details){
        var clickednum=Number(details.target.textContent)

})