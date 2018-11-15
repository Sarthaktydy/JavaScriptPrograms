/******************************************************************************
 *  Compilation:  node CliniqueManagement.js
 *  
 *  Purpose:  Program which is used to maintain an address book. An address 
 *            book holds a collection of entries, each recording a person's 
 *            first and last names, address, city, state, zip, and phone no.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   01-11-2018
 *
 ******************************************************************************/

// Implementing the File System module in this application.
var fs = require("fs");

// Implementing the Radline module in this application.
var rl = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var r = rl.createInterface(process.stdin, process.stdout);