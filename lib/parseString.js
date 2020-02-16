"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cellHash = cellHash;
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

function parseString(puzzleHash) {
  if (puzzleHash.length !== 81) throw 'Please only pass a string of length 81 and containing "1 - 9 " & " e "';
  let result = Array(9).fill(Array(9).fill(' '));
  let hashed = [...puzzleHash].map(cellHash);
  let iterator = 0;

  for (let i = 0; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
      result[i][j] = hashed[j + iterator];
    }

    iterator += 9;
  }

  return result;
}