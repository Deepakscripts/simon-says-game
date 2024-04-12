# Simon Game Documentation

## Introduction

Welcome to Simon Game! This is an interactive game where you test your memory skills by repeating a sequence of colors. The game starts with a single color, and with each successful round, the sequence gets longer. Are you ready to challenge yourself and see how far you can go?

## Quick Start

To begin playing Simon Game:

1. Press any key on your keyboard to start the game.
2. Watch as a color flashes on the screen.
3. Click on the corresponding color button on the screen.
4. Repeat the sequence correctly to advance to the next level.

## Code Overview

Let's dive into the code that powers Simon Game.

### Variables

- `gameSeq`: An array to store the randomly generated sequence of colors by the game.
- `userSeq`: An array to store the sequence of colors inputted by the user.
- `btns`: An array containing the names of the color buttons available in the game.
- `started`: A boolean variable to track if the game has started.
- `level`: An integer variable to keep track of the current level of the game.
- `h3`: A reference to the `<h3>` element in the HTML for displaying game information.

### Event Listeners

- `document.addEventListener("keypress", ...)`: Listens for a keypress event to start the game when any key is pressed.
- Button Event Listeners: Listens for clicks on color buttons to capture user input.

### Functions

- `levelUp()`: Increases the game level, generates a random color sequence, and updates the display.
- `btnPress()`: Handles user button clicks, flashes the button, and checks the user input against the game sequence.
- `checkAns(idx)`: Compares the user input against the game sequence and determines if the round is successful or not.
- `reset()`: Resets game variables and prepares for a new game session.
- Flash Functions: Functions to add and remove flashing effects for game and user interactions.

## Gameplay Tips

- Pay close attention to the sequence of colors presented by the game.
- Take your time to memorize the sequence before attempting to repeat it.
- Stay focused and try to beat your own high score with each new game session.

## Conclusion

That's it! You're now ready to dive into the exciting world of Simon Game. Challenge yourself, have fun, and see how far you can go. Good luck!

