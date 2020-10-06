const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = ""

    for (let i = 0; i < expr.length / 10; ++i) {
        let cypher_char = expr.slice(i*10, i*10 + 10)

        if (cypher_char === "**********") {
            result += " "
            continue
        }

        let morse_key = ""

        for (let j = 0; j < 5; ++j) {
            let char = (cypher_char.slice(j*2, j*2 + 2))
            
            if (char === "10") {
                morse_key += "."
            } else if (char === "11") {
                morse_key += "-"
            } 
        }

        result += MORSE_TABLE[morse_key]
    }

    return result
}

module.exports = {
    decode
}