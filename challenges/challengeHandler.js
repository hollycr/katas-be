const { exec } = require('child_process');

const challenges = {
    1: '../__tests__/challenge-one-test.js',
} 

function runTest(testPath) {
    exec(`npm run test ${testPath}`, (error, stdout, stderr) => {
        if (error) {
            console.log('ERROR');
            //console.error(`exec error: ${error}`); // Error: USEFUL DATA. This occurs when test fails!
            return;
          }
            console.log("SUCCESS");
          //console.log(`stdout: ${stdout}`); // Standard Output: Just random running info.
          //console.error(`stderr: ${stderr}`); // Standard Error: USEFUL DATA. This occurs when test passes! ...?
    })
} 

function sumbitChallenge(userInput) {

    userInput = function returnEmptyArray() { return []; }
    // ? Checks to see if user submitted a function or not ?
    const inputString = userInput.toString();

    process.env.TEST_INPUT = JSON.stringify({ 'userInput': inputString}); // Using an enviromental variable for global access to the user input.
    runTest(challenges[1]); 
}

sumbitChallenge();

