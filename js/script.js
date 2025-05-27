// Copyright (c) 2020 domeic dangelo All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function checks if the user has selected the random number from above.
 */
// eslint-disable-next-line no-unused-vars
function calculate() {
  // input
  const firstNumber = parseInt(document.getElementById("firstNumber").value)
  const secondNumber = parseInt(document.getElementById("secondNumber").value)
  const term = 5

  let resultSequence = ""

  // process
  for (let count = 0; count < term; count++) {
    let currentNumber = 1

    for (let counter = 0; counter < count; counter++) {
      let repeatedlyAdd = 0

      for (let loop = 0; loop < secondNumber; loop++) {
        repeatedlyAdd += currentNumber
      }
      currentNumber = repeatedlyAdd
    }

    let termValue = 0
    for (let repeatAdd = 0; repeatAdd < firstNumber; repeatAdd++){
      termValue += currentNumber
    }

    resultSequence += termValue
    if (count < term - 1) {
      resultSequence += ", "
    }
  }

  // Display the full sequence
  document.getElementById("result").innerHTML =
    'Your geometric sequence is: ' + resultSequence
}
