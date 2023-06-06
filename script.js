const numberRange= document.getElementById("numberRange");
const sliderRange=document.getElementById("characterRange");
const form=document.getElementById("passwordGenerator");
const upperCaseCheck=document.getElementById("uppercaseCheckbox");
const symbolsCheck=document.getElementById("symbolsCheckbox");
const numberCheck=document.getElementById("numberCheckbox");
const displayPassword=document.getElementById("Display");
const backgroundVideo=document.getElementById("bgvideo");

backgroundVideo.playbackRate=1

const lowerCase=generateAscii(97,122);
const upperCase=generateAscii(65,90);
const symbolsCase=generateAscii(33,47).concat(generateAscii(58,64)).concat(generateAscii(123,126));
const numberCase=generateAscii(48,57);


numberRange.addEventListener("input",synchValue);
sliderRange.addEventListener("input",synchValue);

function synchValue(e){
    const value=e.target.value;
    numberRange.value=value;
    sliderRange.value=value;
}

function generateAscii(low,high){
    const newarray=[];
    for(let i=low;i<=high;i++){
        newarray.push(i);
    }

    return newarray;
}

form.addEventListener("submit",e=>{
    e.preventDefault();
    const numberRangeVar=numberRange.value;
    
    const upperCaseCheckVar=upperCaseCheck.checked;
    
    const symbolsCheckVar=symbolsCheck.checked;
    const numberCheckVar=numberCheck.checked;
    const password=generator(numberRangeVar,upperCaseCheckVar,symbolsCheckVar,numberCheckVar);
    
    console.log(password);
    displayPassword.innerText=password;
});

function generator(numberRange,upperCaseCheck,symbolsCheck,numberCheck){    
    let passCode=lowerCase;
    let finalPassword=[];
    if(upperCaseCheck){
        passCode=passCode.concat(upperCase);
        //console.log(passCode);
    }
    if(symbolsCheck){
        passCode=passCode.concat(symbolsCase);
    }
    if(numberCheck){
        passCode=passCode.concat(numberCase);
    }

    for(let i=0;i<numberRange;i++){
        const ch=String.fromCharCode(passCode[Math.floor(Math.random()*passCode.length)]);
        finalPassword.push(ch);
    }

    return finalPassword.join('');

}





