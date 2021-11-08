let display=document.getElementById('inputBox');
let displayValue="";
let buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click',(ele)=>{
        buttonText = ele.target.innerText;
        if(buttonText=='÷'){
            buttonText='/';
            display.value+=buttonText;
        }
        else if(buttonText=='X'){
            buttonText='*';
            display.value+=buttonText;
        }
        else if(buttonText=='C'){
            display.value="";
        }
        else if(buttonText=='='){
            display.value=eval(display.value);
        }
        else if(buttonText=='DEL'){
            display.value=display.value.substring(0,display.value.length-1);
        }
        else{
            display.value+=buttonText;
        }
    })
}