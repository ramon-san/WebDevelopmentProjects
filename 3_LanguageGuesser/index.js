// Import the required libraries using ESM.
import { franc, francAll } from 'franc';
import langs from 'langs';
import figlet from 'figlet';
import colors from 'colors';

console.clear();

const inputText = process.argv[2] || null; // We select user input, this must go between "quotes".

if (inputText === null) {
    console.log('\n\nPlease enter a parameter when running the code, this mo go between "quotes".\n'.red);
} else {
    const guessedResult = francAll(inputText); // Get the Franc abreviation of the language name.
    const acronym = guessedResult[0][0]; // We get the acronym for the most probable result.

    if (acronym !== 'und') { // Check if result is undefined.
        try {
            const languageName = langs.where("3", acronym).name; // Get actual name with langs package.
            figlet(languageName, function (err, data) {
                if (err) {
                    console.log('\n\nSomething went wrong on our side, please try again!\n'.red);
                    return;
                }
                console.log("\n" + data.green + "\n");
            });
        } catch (error) {
            console.log('\n\nCould not identify language name, please write your parameter between "quotes".\n'.red);
        }
    } else {
        console.log('\n\nUnidentified language, pleas write a longer text between "quotes".\n'.red);
    }
}