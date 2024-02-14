const { exec } = require('child_process');

const challenges = {
    1: '../__tests__/challenge-one-test.js',
} 

module.exports = class Model {
    
    constructor() {}

    runTest = async (challenge_id, userInput) => {

        return new Promise((resolve, reject) => {
            // ? Checks to see if user submitted a function or not ?
            console.log(userInput);
            process.env.TEST_INPUT = JSON.stringify({ 'userInput': userInput.userInput}); // Using an enviromental variable for global access to the user input.

            exec(`npm run test ${challenges[1]}`, (error, stdout, stderr) => {
                if (error) {
                    console.log('ERROR');
                    resolve({ outcome: 'ERROR', output: stderr });
                    //console.error(`exec error: ${error}`); // Error: USEFUL DATA. This occurs when test fails!
                } else {
                    console.log("SUCCESS");
                    resolve({ outcome: 'SUCCESS', output: stderr });
                //console.log(`stdout: ${stdout}`); // Standard Output: Just random running info.
                //console.error(`stderr: ${stderr}`); // Standard Error: USEFUL DATA. This occurs when test passes! ...?
                }  
            })
        });
    }
}