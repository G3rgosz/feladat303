/*
* File: app.ts
* Author: Szivák Gergő
* Copyright: 2021, Szivák Gergő
* Group: Szoft II N
* Date: 2021-10-07
* Github: https://github.com/Gergosz-2000/
* Licenc: GNU GPL
*/
const num1 = document.querySelector("#num1") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLInputElement;

const calcButton = document.querySelector("#calcButton");

function add(number1: number):number{
    return ((Math.pow(number1/2,2)*Math.PI)/2)*2500;
}
calcButton.addEventListener('click', event => {
    let res = add(+num1.value);
    result.value = String(res.toFixed(1)+" Ft");
})