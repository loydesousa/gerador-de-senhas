/**
 * referenciando inputs
 */
const passInput = document.querySelector("#inputPasswordId");
const lenInput = document.querySelector("#inputLenghtId");
const infoLenght = document.querySelector('label[for="inputLenghtId"]');
const btnGerar = document.querySelector("#btnGerar");

const chkLowerId = document.querySelector("#chkLowerId");
const chkUpperId = document.querySelector("#chkUpperId");
const chkNumberId = document.querySelector("#chkNumberId");
const chkSymbolsId = document.querySelector("#chkSymbolsId");

const numbers = [0, 1, 2, 3, 4, 5 , 6 ,7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

const caracteres = Array.from(Array(26)).map((_, i) => i+97);
const LowercaseCaracteres = caracteres.map((item) => String.fromCharCode(item));
const UppercaseCaracteres = LowercaseCaracteres.map((item) => item.toUpperCase());

infoLenght.innerHTML = lenInput.value;

lenInput.addEventListener("change", ()=>{
    infoLenght.innerHTML = lenInput.value;
})
btnGerar.addEventListener("click", ()=>{
    generatePassword(
        chkNumberId.checked,
        chkSymbolsId.checked,
        chkLowerId.checked,
        chkUpperId.checked,
        lenInput.checked,
    );
})
const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    length
) => {
    const newArray = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowercase ? LowercaseCaracteres : []),
        ...(hasUppercase ? UppercaseCaracteres : [])
    ]    
    if(newArray.length === 0) return;
    let password = "";
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[randomIndex]; 
    }
    passInput.value = password;
};