/**
 * Fungsi untuk memvalidasi tanda kurung
 * @param {string} s - String input yang berisi ekspresi
 * @returns {boolean} - True jika seimbang, False jika tidak
 */
function isBalanced(s) {
    let stack = [];

    const pasangan = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } 

        else if (char === ')' || char === ']' || char === '}') {
            let topElement = stack.pop();
            
            if (topElement !== pasangan[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Test case soal
const test1 = "({[a+b]})";
const test2 = "([)]";
const test3 = "{[]}";
const test4 = "(((";

console.log(`Input: "${test1}" -> Output: ${isBalanced(test1)}`); 
console.log(`Input: "${test2}" -> Output: ${isBalanced(test2)}`); 
console.log(`Input: "${test3}" -> Output: ${isBalanced(test3)}`);
console.log(`Input: "${test4}" -> Output: ${isBalanced(test4)}`); 