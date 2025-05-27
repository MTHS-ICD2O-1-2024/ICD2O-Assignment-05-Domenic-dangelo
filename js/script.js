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
  let firstNumber = parseInt(document.getElementById("firstNumber").value)
  const secondNumber = parseInt(document.getElementById("secondNumber").value)
  let numberOfTerms = parseInt(document.getElementById("numberOfTerms").value)
  let answer = 0

  // process
  while (numberOfTerms) {
    answer = answer + secondNumber
    firstNumber --
  }
  // output
  document.getElementById("result").innerHTML =
  'Your number is: ' + answer
}
