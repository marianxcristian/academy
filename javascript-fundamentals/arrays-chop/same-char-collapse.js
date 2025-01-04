// Same Char Collapse

// Write a function sameCharCollapse that takes in a string and returns a collapsed version of the string. 
// To collapse the string, we repeatedly delete 2 adjacent characters that are the same until there are no such adjacent characters. 
// If there are multiple pairs that can be collapsed, delete the leftmost pair. 
// For example, we take the following steps to collapse "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy

function sameCharCollapse(string) {
    let array = string.split('');
    let repeat = true;

    while (repeat) {
        repeat = false;

        for (let i = 0; i < array.length - 1; i++) {
            let char = array[i];
            let next = array[i + 1];

            if (char === next) {
                array.splice(i, 2);
                repeat = true;
            }
        }
    }

    return array.join('');
}

console.log(sameCharCollapse("zzzxaaxy")); // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy

console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv