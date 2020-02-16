"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cellHash = cellHash;
exports.cellMap = cellMap;
exports.default = parseString;

function cellHash(cell) {
  if (cell === "e") {
    return ' ';
  } else if (cell >= 1) {
    return Number(cell);
  } else {
    throw 'Please only pass a string of length 81 and containing "1 - 9 " & " e "';
  }
}

function cellMap(array) {
  let iterator = 0;
  return (cell, index) => {
    array[iterator][index % 9] = cell;
    index % 9 === 0 && index > 9 && iterator++;
  };
}

function parseString(puzzleHash) {
  if (puzzleHash.length !== 81) throw 'Please only pass a string of length 81 and containing "1 - 9 " & " e "';
  let result = Array(9).fill(Array(9).fill(' '));
  [...puzzleHash].map(cellHash).forEach(cellMap(result));
  return result;
}