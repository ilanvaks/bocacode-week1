// length 

function strLength1 () {
    const string = "Great idea Megan!!"
    console.log(string.length)
}


const strLength2 = () => {
    const string = "Great idea Megan!!"
    console.log(string.length)
}

// Length Invoke
strLength2()

// to upperCase
function toUpper1 () {
    const string = "omg what is wrong with me today"
    console.log("str uppercase:",string.toUpperCase)
}

const toUpper2 = () => {
    const string = "omg what is wrong with me today"
    console.log(string.toUpperCase())
}

toUpper2()


// TRIM

function strTrim1 () {
    const string = "      Hello this is Major Tom    "
    console.log("str trim:", string.trim())
}

const strTrim2 = () => {   
    const string = "       Helo is this major Tom     "
    console.log("str trim:", string.trim())
}

strTrim1()

// Replace

function strReplace1() {
    const str = "I didn't sleep much last night."
    const subject = "sleep much"
    const replace = "eat anything"
    console.log("str replace:",str.replace(subject, replace))
}

const strReplace2 = () => {
    const str = "I didn't sleep much last night."
    const subject = "sleep much"
    const replace = "eat anything"
    console.log("str replace:",str.replace(subject, replace));
}

strReplace2()

// substring 
function strSub1() {
    const str = "I like big fonts and i cannot lie"
    console.log("substring:", str.substring(7,15))
}


const strSub2 = () => {
    const str = "I like big fonts and i cannot lie"
    console.log("substring:", str.substring(7,15))
}

strSub2()

//split 

function strSplit () {
    const str = "I like start wars. ho purrr"
    console.log("str spit:",str.split())
}

const strSplit2 = () => {
    const str = "I like startwars. ho purrr"
    console.log("str spit:",str.split())
}

strSplit2()

// startsWith()
//endsWith()
//includes()
// 