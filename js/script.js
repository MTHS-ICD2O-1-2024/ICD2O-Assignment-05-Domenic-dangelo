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
  let firstUserInput = parseFloat(document.getElementById("firstNumber").value)
  const secondUserInput = parseFloat(document.getElementById("secondNumber").value)
  let number = 0
  const answer = firstUserInput

  // process
  while (true) {
    number++
    firstUserInput = firstUserInput - secondUserInput
    if (firstUserInput < secondUserInput){
      break
    }
  }
  // output
  document.getElementById("result").innerHTML =
    + answer + ' ÷ ' + secondUserInput + ' = ' + number + ' R ' + firstUserInput
}
