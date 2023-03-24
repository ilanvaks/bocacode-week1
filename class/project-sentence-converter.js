// objective : create a function that converts a string to a friendly sentence. 
// string method : toLowercase(), toUppercase(), trim(), 
// aarow function :

function converSentence (text) {
    const lowerText = lowerText[0].toLowercase();
    const lowerText2 = lowerText[0].toUppercase()
    const finalText = lowerText + lowerText.substring(1); 
    return lowerText2;
}


const convertSentence2 = (text) => {
    const lowerText= text.toLowerCase()
    const upperFirst = lowerText[0].toUpperCase()
    const finalText = upperFirst + lowerText.substring(1); 
    return finalText;    
}

const sentence = "type Better PleAse!"
const result = convertSentence2(sentence)

console.log("original:", sentence)
console.log("result:", result)