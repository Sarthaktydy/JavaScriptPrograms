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

}

function takeInput() {
    r.question("Are you a\n1. Patient or\n2. User\n", function(ans1) {
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
        console.log(d.doctors[i].id + ". " + d.doctors[i].name + " " + d.doctors[i].special);
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
                    doc: ""
                }

                d.patients.push(patient);
                d.size++;
                updatePatient(d);
                chooseDoctor(size);
            });
        });
    });
}

function chooseDoctor(pId) {

    displayDoctors();

    r.question("Choose your Doctor by ID: ", (ans1) => {
        r.question("Choose a date to visit him (DD/MM/YY): ", function(ans2) {
            if (isDocAvailable(ans1.trim(), ans2.trim())) {
                r.question("Doctor is Avaialble, Book an Appointment? ", function(ans3) {
                    var dName = getDoctorName(ans1.trim());
                    if (ans3.trim().startsWith('y')) {
                        bookAppointment(pId, ans1.trim(), dName, ans2.trim());
                    } else {
                        console.log("Thank you for visiting!");
                        r.close();
                    }
                });
            } else {
                r.close();
            }
        });
    });
}

function bookAppointment(pId, dId, dName, date) {
    var doc = readFromJson('doc');
    var pat = readFromJson('pat');
    if (!doc.doctors[dId - 1].appointments.test.includes(date)) {
        doc.doctors[dId - 1].appointments[date] = [];
    }
    pat.patients[pId - 1];
    doc.doctors[dId - 1].appointments[date].push(pId);
    doc.doctors[dId - 1].appointments.test.push(date);
    //pat.patients[pId - 1].doc = "Dr. " + dName + " on " + date;

}

function getDoctorName(id) {
    var d = readFromJson('doc');
    return d.doctors[id - 1].name;
}

function isDocAvailable(id, date) {
    var d = readFromJson('doc');
    if (!d.doctors[id - 1].appointments.test.includes(date)) {
        return true;
    } else if (d.doctors[id - 1].appointments[date].length <= 5) {
        return true;
    } else {
        return false;
    }
}

takeInput();