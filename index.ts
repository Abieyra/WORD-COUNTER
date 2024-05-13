#!/usr/bin/env node
import inquirer from "inquirer"

// declare const ans and assign it to the result  of inquirer.prompt

const answers:{
    sentence:string
}= await inquirer.prompt([
  {
   name:"sentence",
   type:"string",
   message:"Enter your sentence to count the word"
  }
])

const words= answers.sentence.trim().split(" ")

// print arrey of words to the console
console.log(words)

// print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);

