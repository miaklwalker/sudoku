# Sudoku - Human-Theory-Solver

## Human Theory
My definition of human theory in this particular case, is avoiding the computational advantage
computer have with brute force methods, with this in mind this solver only solves by elimination.

It first parses a string of 81 characters.
        
EXAMPLE
    
    'eeeeeee86ee6e43eeeeee6eee3596e4eee2eeee731eeee4eee2e5753eee8eeeeee25e3ee49eeeeeee'
        
Transforming the string into a 9 X 9 Array of Empty Strings and numbers

It then iterates through the arrays and finds the first space , only then check the possible options for the square
it will only place a numeric value if there is only one possibility for the cell.
In any other case it will place a string with the letter `"s"` _Short for skip_

after reaching the end of the array it will strip the array of all the `"s"` and replace them with empty string then repeat the process 

The loop finally ends when after attempting to remove all `"s"` from the array no empty strings are found the puzzle is then returned.


This is by no means even close to an optimal method for solving puzzles.

This project actually started as me testing the new command line Javascript run time DENO from the creator of node js .

It supports native typescript out of the box no compiling necessary and runs it with type checking ! 

If you haven't, you should definitely check it out!

Programs used:
--------------

WEBSTORM IDE by JETBRAINS

Languages , Frameworks , and libraries
-------------
JEST,TypeScript,JavaScript,Node,Deno

Puzzles From 
-------
WebSudoku

TheOdinProject

