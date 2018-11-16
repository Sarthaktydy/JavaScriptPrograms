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

function readFromJson(fileName) {
    if (fileName.startsWith('d') || fileName.startsWith('D')) {

        // Reading the data from UserShares.json
        var data = fs.readFileSync('./JsonFiles/Doctors.json');

        // Converting it into string.
        var j = JSON.parse(data);

        // Returning the string.
        return j;
    } else {

        // Reading the data from UserShares.json
        var data = fs.readFileSync('./JsonFiles/Patients.json');

        // Converting it into string.
        var j = JSON.parse(data);

        // Returning the string.
        return j;
    }
}

/**
 * This function helps to convert any object or data passed into
 * JSON format and write that JSON string to a file.
 * 
 * @param {any} str  It is the data passed by the caller.
 */
function writeInJson(patient, doctor, time) {

    // Reading the file from JSON passing '' String.
    var jsonArr = readFromJson('Doctors');

    fs.writeFileSync('./JsonFiles/UserShares.json', JSON.stringify(jsonArr));

    console.log("JSON File Saved!");

    r.close();
}

function updatePatient(data) {
    // Reading the file from JSON passing '' String.

    fs.writeFileSync('./JsonFiles/Patients.json', JSON.stringify(data));

    console.log("JSON File Saved!");

    r.close();
}

function takeInput() {
    r.question("Choose 1. Patient\n2. User\n", function(ans1) {
        if (ans1.trim() == 1) {
            registerPatient();
        } else {
            getAppointment();
        }
    });
}

function displayDoctors() {
    var d = readFromJson('doc');
    for (var i = 0; i < d.doctors.length; i++) {
        console.log(d.doctors[i][name] + " " + d.doctors[i][name] + " " + d.doctors[i][name]);
    }
}

function registerPatient() {

    var d = readFromJson('patient');
    var size = d.size;
    r.question("Enter your name: ", function(ans1) {
        r.question("Enter your mobile number: ", function(ans2) {
            r.question("Enter your age: ", function(ans3) {

                var patient = {
                    name: ans1.trim(),
                    id: size,
                    phone: ans2.trim(),
                    age: ans3.trim(),
                }

                d.patients.push(patient);
                d.size++;
                updatePatient(d);
                chooseDoctor(patient.id);
            });
        });
    });
}

function chooseDoctor(id) {

    r.question(displayDoctors() + "Choose one by ID: ", function(ans1) {
        var nm = getDoctorName(ans1.trim());
        r.question("Choose a date to visit Dr. " + nm, function(ans2) {
            if (isDocAvailable(id, ans2)) {
                r.question("Choose a time:", function(ans3) {

                });
            } else {

            }
        });
    });
}

function getDoctorName(id) {
    var d = readFromJson('doc');
    return d.doctors[id - 1][name];
}

function isDocAvailable(id, date) {
    var d = readFromJson('doc');
    if (d.doctors[d - 1][appointments] == null) {
        return true;
    } else if (d.doctors[d - 1][appointments][date].length <= 5) {
        return true;
    } else {
        return false;
    }
}