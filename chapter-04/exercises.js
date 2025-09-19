////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const { resourceLimits } = require("worker_threads")

//  create array with contents of integers within given range
//  create array without contents when given same numbers as range
// example - 

function range(start, end, step = 1) {
 /*
 
 //base
     if(array === 0){
      return output
    }

  //recusrion

  output.push(array - 1)

 return range(array, output)

 */

 let result = [];

 // if (1, 1)).to.deep.equal([])
 if (start === end) {
  return [];
}

 // Positive step, counting up
 if (step > 0) {
   for (let i = start; i <= end; i += step) {
     result.push(i);
   }
 }
 // Negative step, counting down
 else if (step < 0) {
   for (let i = start; i >= end; i += step) {
     result.push(i);
   }
 }

 return result;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// should evaluate sum of array with integers
// should evaluate sum of array with negative integers
// should evaluate sum of an empty array
// should evaluate sum of array with only 0



function sum(array) {
  var total = 0

  for(var i = 0; i < array.length; i++){
      total += array[i]
  }
  return total
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// reverse an array

function reverseArray(array, output=[]) {
  for (var i = array.length - 1; i >= 0; i--){
    output.push(array[i])
  }
  return output
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



function reverseArrayInPlace(array) {

 for (let i = 0, j = array.length - 1; i < j; i++, j--){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
 }

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// converts array into list structure (object)
// [1, 2,3 ] => {value: 1, value: 2, value: 3}

function arrayToList(array) {
  var rest = null;

  for (var i = array.length - 1; i >= 0; i--) {
    rest = {value: array[i], rest: rest};
  }
  return rest;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// turn object list into arrays
// {value: 1, value: 2, value: 3} => [1, 2, 3 ]

function listToArray(object, array=[]) {
  // base
    if(object.rest === null){
      array.push(object.value)
      return array
    }

  // recursions
    array.push(object.value)

  return listToArray(object.rest, array)
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// inserts value into list at first position (before all other elements)

function prepend(value, list) {
  return { value: value, rest: list }
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Returns n-th value in given list
// example ([123123], 4) => 2

function nth(array, x) {
 // if x isn't in array
 if (!array) {
  return undefined
};

 // base 
 if (x === 0) {return array.value};

 // recursive
 return nth(array.rest, x - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// compare two empty objects
// compare two numbers
// compare two falsey values
// compare two objects with the same properties and values
// compare two objects with the same properties and different values
// compare two objects with identical nested arrays
// compare two objects with unique nested arrays
// compare two objects with nested objects

function deepEqual(x, y) {
  
  // check if x and y aren't objects
    if(typeof x !== 'object' && typeof y !== 'object'){
        return x === y
    }
  // ch4ck if x or y is not an object
    if(typeof x !== 'object' || typeof y !== 'object'){
      return false
    }

  // array of each input keys
  var xKeys = Object.keys(x)
  var yKeys = Object.keys(y)

  if (xKeys.length !== yKeys.length){
    return false
  }
// loop through to check if array keys match and values at keys matcj
  for (var i = 0; i < xKeys.length; i++){
    if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
        return false
    }
  }
return true
  }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};