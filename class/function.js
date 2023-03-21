// function decloration
function message(firstName) {
    console.log("hello " + firstName);
}

function getMeow () {
    console.log("meow");
}

function getSumTotal(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;
    console.log(result);
}

function makePie(quantity) {
    const pie = '🥧'.repeat(quantity);
    console.log(pie);
}

function makeAnimal(animal, quantity) {
    const happyResult = animal.repeat(quantity)
    return happyResult;  
}

function generateLoudSpeaker(text) {
    const newText = "🔈 " + text.toUpperCase();
    return newText;
}

// invoke the function 
//message("Jarvis");
//message("cat who are you?");
//getSumTotal(2,5)
//getSumTotal(12000,12000000000);
//getSumTotal("sym","phony");
//getSumTotal("back","forward");
//makePie(4000);
//const renderResult = "There are many animals" + makeAnimal('🐼',953);
//console.log(renderResult);
const computer = generateLoudSpeaker("whisper wh is per");
//console.log(makeAnimal('🐼',953));
console.log(computer);