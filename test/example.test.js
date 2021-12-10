// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { createStatsString } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = "You have changed the head 1 times, the body 2 times, and the pants 3 times. And nobody can forget your character's classic catchphrases:";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createStatsString(1, 2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
