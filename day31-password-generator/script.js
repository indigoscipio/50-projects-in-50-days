let pwMain = document.querySelector("#input-pw-main");
let pwLength = document.querySelector("#input-pw-length");
let pwInclUpper = document.querySelector("#input-pw-incl-upper");
let pwInclLower = document.querySelector("#input-pw-incl-lower");
let pwInclNum = document.querySelector("#input-pw-incl-num");
let pwInclSymbols = document.querySelector("#input-pw-incl-symbols");
let btnGeneratePw = document.querySelector("#btn-generate-pw");

btnGeneratePw.addEventListener("click", (e) => {
  e.preventDefault();
  let length = +pwLength.value;
  let hasLower = pwInclLower.checked;
  let hasUpper = pwInclUpper.checked;
  let hasNumbers = pwInclNum.checked;
  let hasSymbols = pwInclSymbols.checked;

  console.log(length, hasLower, hasUpper, hasNumbers, hasSymbols);

  pwMain.innerText = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumbers,
    hasSymbols
  );
});

function generatePassword(length, lower, upper, numbers, symbols) {
  let generatedPassword = "";
  let typesCount = lower + upper + numbers + symbols;
  let typesArr = [{ lower }, { upper }, { numbers }, { symbols }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  let finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

let randomFunc = {
  lower: generateRandomLower,
  upper: generateRandomUpper,
  number: generateRandomNumber,
  symbol: generateRandomSymbol,
};

function generateRandomLower() {
  let str = "abcdefghijklmnopqrstuvwxyz";
  return str[Math.floor(Math.random() * str.length)];
  //   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateRandomUpper() {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str[Math.floor(Math.random() * str.length)];
}

function generateRandomNumber() {
  let str = "0123456789";
  return str[Math.floor(Math.random() * str.length)];
}

function generateRandomSymbol() {
  let str = "!@#$%^&*(){}[]=<>/,.";
  return str[Math.floor(Math.random() * str.length)];
}

console.log(generateRandomSymbol());
