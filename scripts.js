// SECTION: ALERT THE USER WITH INFORMATION
alert(`1,000 JavaScript Most Popular Job Interview Challenge Game:\nCode author:\nDr. Melchisedec Bankole.\nClick OK to continue to the code challenge.`);
alert(`JavaScript Most Popular Job Interview Challenge:\n\nThis is the time to annex your coding Super-Power.\nThis might be your long-awaited opportunity to land your first dream job in tech.\nAre you ready? Lets go!\n Click Ok to continue to the challenge.`);

// Execute code when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {

    // Disable right-click, copy, cut, paste, Ctrl+C, Ctrl+V, and Escape
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('copy', function (e) {
    e.preventDefault();
});

document.addEventListener('cut', function (e) {
    e.preventDefault();
});

document.addEventListener('paste', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'v' || e.key === 'V')) {
        e.preventDefault();
    }

    if (e.key === 'Escape') {
        e.preventDefault();
    }
});
    
    // SECTION: COUNTDOWN TIMER
    let time = 420; // Initial time in seconds
    let intervalId; // Variable to store the interval ID

    // Function to update the timer display
    function updateTimer() {
        const timerElement = document.getElementById('timer');
        timerElement.textContent = time;
    }

    // Function to clear user code and display a message when time's up
    function clearUserCode() {
        const textarea = document.getElementById('code-area');
        textarea.value = ''; // Clear the textarea
        clearInterval(intervalId); // Stop the timer
        alert("Oops! Time's up, but don't give up just yet.\nTake a deep breath, annex your coding Super-Power, and give it another shot.\nYour journey to mastering JavaScript continues!\nClick OK to embrace the challenge.");
        restartTimer(); // Restart the timer
    }

    // Function to restart the countdown timer
    function restartTimer() {
        time = 420; // Reset the time
        updateTimer(); // Update the timer display
        intervalId = setInterval(() => {
            updateTimer(); // Update the timer display
            if (time === 0) {
                clearUserCode(); // If time's up, clear user code and show message
            }
            time--; // Decrement the time
        }, 1000); // Update the timer every second
    }

    // Call the restartTimer function to start the countdown
    restartTimer();

    // SECTION: EVALUATE USER'S CODE
    function evaluateCode() {
        const userCode = document.getElementById('code-area').value.trim(); // Trim whitespace

        // Check if there is user input
        if (!userCode) {
            alert('Please provide code before evaluating.'); // Alert the user to input code
            return;
        }

        // Check if the user's input code includes Fizz, Buzz, or FizzBuzz
        if (!userCode.includes('Fizz') && !userCode.includes('Buzz') && !userCode.includes('FizzBuzz')) {
            alert('Your code is incomplete. Please add logic to handle FizzBuzz conditions.');
            return;
        }

        try {
            // Create a sandboxed environment with the fizzBuzz function
            const sandbox = new Function(`
                ${fizzBuzz}
                let userOutput;
                try {
                    // Create a new fizzBuzz function in the user's context
                    const fizzBuzzInUserContext = ${fizzBuzz};
                    userOutput = fizzBuzzInUserContext(100).join(',');

                    // Create a function for user code and call it within the loop structure
                    function userCodeFunction() {
                        ${userCode}
                    }
                    userCodeFunction();
                } catch (error) {
                    throw new Error('User code error: ' + error.message);
                }
                return userOutput;
            `);

            const userOutput = sandbox();

            // Compare the user's output with the expected result (FizzBuzz)
            const fizzBuzzResult = fizzBuzz(100);
            const expectedOutput = fizzBuzzResult.join(',');

            if (userOutput === expectedOutput) {
                alert('Congratulation! Code executed successfully, and with your newly discovered coding Super-Power, you are on your way to getting hired!');
            } else {
                alert('Sorry, your code did not produce the expected output for the FizzBuzz challenge. Please try again.');
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }

    // SECTION: EXAMPLE OF USING FIZZBUZZ FUNCTION
    //const fizzBuzzResult = fizzBuzz(100);
    //console.log(fizzBuzzResult);

    // SECTION: MATHEMATICAL CONCEPTS
    // Modulo operation (%): Determine divisibility by checking the remainder.
    // Logical conditions (if-else): Control flow based on divisibility.
    // Looping (for loop): Iterate through numbers for FizzBuzz.
    // Arrays: Store and compare multiple results.
    // Strict mode ('use strict'): Enforce better coding practices.

    // SECTION: FIZZBUZZ CHALLENGE IMPLEMENTATION
    function fizzBuzz(n) {
        const result = [];
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
            else if (i % 3 === 0) result.push('Fizz');
            else if (i % 5 === 0) result.push('Buzz');
            else result.push(i);
        }
        return result;
    }

   // Add event listener to the EvaluateCode button
document.querySelector('.Evaluate-Code').addEventListener('click', evaluateCode);

// Get the article element
const article = document.querySelector('.article');

// Function to toggle 'hidden' class on article and scroll into view
function toggleArticleVisibility() {
    if (article) {
        article.classList.toggle('hidden');
        // Scroll to the article
        article.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add an event listener to the link for the FizzBuzz challenge solutions
document.getElementById('revealLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    toggleArticleVisibility(); // This is for the solutions link
});

// Add an event listener to the link for the JavaScript interview challenge
document.getElementById('code-quiz').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    toggleArticleVisibility(); // This is for the challenge link
});

// JavaScript for scrolling behavior
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) { // Adjust the threshold as needed
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
