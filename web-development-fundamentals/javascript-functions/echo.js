// Echo

// Write a function echo that takes in a string and console.logs that string "echo-ized".
// Analyze the example test cases to see the expected "echo-ized" output of the function.

function echo(string) {
    let upper = string.toUpperCase();
    let lower = string.toLowerCase();
    let msg = upper + " ... " + string + " ... " + lower;

    console.log(msg);
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey");  // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"