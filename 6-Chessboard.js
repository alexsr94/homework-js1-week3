/*
Chessboard
Write a program that creates a string that represents an 8�8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height
*/

function customChessGrid(num1, num2) {
  const chess1 = "#";
  let chessgrid;
  for (i = 0; i < num1; i++) {
    chessgrid += (" " + chess1).repeat(num2) + "\n";
  }
  return chessgrid;
}
console.log(customChessGrid(10, 5));
// i dont know how to inser new empty line to a string.
