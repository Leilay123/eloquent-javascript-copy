
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

/**
 * I: function triangles take an number parameter(size of triangles)
 * O: return the 'size' of triangles
 * C:
 * E:
 */

function triangles(number) {

for (let i = 1; i <= number; i++){
  console.log('#'.repeat(i))
  }
  
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {

 // should access each number from start to end (need a loop)
  for(let i = start; i <= end; i++){
    if (i % 3 === 0 && i % 5 === 0){ // if number 3 % === 0 && % 5 === 0, log fizzbuzz
      console.log('fizzbuzz')
    } else if (i % 3 === 0){// if number % 3 === 0, log fizz
      console.log('fizz')
    } else if (i % 5 === 0){// if number % 5 === 0, log buzz
      console.log('buzz')
    } else {
      console.log(i)
    }

  }
  
  //wait woops
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(x) {
  // x is the size of the chessboard

  // since the rows and colums are differet, I might need 2 loops for each row??? Prob over thinking it
  //need a board thing
  let board = ''; // Initialize the board as an empty string.

  for (let row = 0; row < x; row++) {
    let line = ''; // Reset the line for each row.

    for (let col = 0; col < x; col++) {
      // Alternate between spaces and hashes for the chessboard pattern.
      if ((row + col) % 2 === 0) {
        line += ' ';
      } else {
        line += '#';
      }
    }

    board += line + '\n'; // Add the line to the board and add a newline.
  }

  console.log(board);
}


  


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}