const englishBox = document.getElementById('english')
const morseBox = document.getElementById('morse')

const translateBtn = document.getElementById('translateBtn')

const morseMap = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": "/"
};

const englishMap = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " "
}

translateBtn.addEventListener("click", () => {
    if(morseBox.value == ''){
        textToMorse()
    }else{
        morseToText()
    }
})

function textToMorse() {
    let text = englishBox.value.toLowerCase();

    text = text.split('')

    text = text.map((char) => {
        return morseMap[char]
    })

    text = text.join(' ')

    const morse = text

    morseBox.value = morse
}

function morseToText() {
    let morsed = morseBox.value.toLowerCase();

    morsed = morsed.split(' ')

    morsed = morsed.map((char) => {
        return englishMap[char]
    })

    morsed = morsed.join('')

    const text = morsed

    englishBox.value = text
}