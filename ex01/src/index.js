//select all buttons
let a = document.querySelectorAll('.keyboard-button');
//get id of text-area 
let b = document.getElementById('text-value');

const deleteCharacter = ()  => {
    let x = b.innerHTML;
    let arr = [];
    for (let e of x){
        arr.push(e);
    }
    arr.pop();
    let y = "";
    for (let i = 0; i < arr.length; i++){
        y += arr[i];
    }
    b.innerHTML = y;
}
//toogle caps lock on/off
const capsLock = () => {
    let a = document.querySelector("#capslock.keyboard-button");
    a.classList.toggle("active");
}
//upperCase -- caps locks
const isCapsLockOn = () => {
    let elem = document.querySelector("#capslock");
    let hasClass = elem.classList.contains("active");
    return hasClass;
}
//upperCase -- shift
const shift = () => {
    let a = document.querySelector("#shift.keyboard-button");
    a.classList.toggle("active");
}
const isShiftOn = () => {
    let elem = document.querySelector("#shift");
    let hasClass = elem.classList.contains("active");
    return hasClass;
}
const removeShift = () => {
    let a = document.querySelector("#shift.keyboard-button");
    if (a.classList.contains("active")) {
        a.classList.remove("active");
    }
}
//turn all letters to upercase when caps lock or shift
//select all letters from keyboard
var letter = document.querySelectorAll('.letter');
const toogleUpperLower = () => {
    if (isCapsLockOn() || isShiftOn()) { 
        if(isCapsLockOn() && isShiftOn()) {
            lettersToLower();
        }  else {
            lettersToUpper();
        }
    } else {
        lettersToLower();
    }
}
//leters to lower
const lettersToLower = () => {
    for (let i = 0; i < letter.length; i++) {
        let a = letter[i];
        a.innerHTML = a.innerHTML.toLowerCase();
    }
}
//letter to upper
const lettersToUpper = () => {
    for (let i = 0; i < letter.length; i++) {
        let a = letter[i];
        a.innerHTML = a.innerHTML.toUpperCase();
    }
}
//show text-area inputs
let textInput = b.innerHTML;
const showText = () => {
    console.log(textInput);
}
//chek if text to long to add break
let shouldIBreak = (n) => {
    if (n.length % 40 === 0 && n.length !== 0) {
        return true;
    }
    return false;
}