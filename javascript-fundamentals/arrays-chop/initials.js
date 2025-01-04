// Initials

// Write a function initials(name) that accepts a full name as an arg. 
// The function should return the initials for that name.

function initials(name) {
    let array = name.split(' ');
    let initials = [];

    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        let letter = element[0].toUpperCase();
        initials.push(letter);
    }

    return initials.join('');
}

console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'