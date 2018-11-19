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

/**
 * Function to read from the JSON file and return it to the caller in a specific
 * format based on the string passed.
 * 
 * @param {String} fileName  It is the name of which file to extract JSON from.
 * 
 * @returns {String}  It returns the parsed JSON file to the caller.
 */
function readFromJson(fileName) {

    // Validating if caller wants data from Doctors.json.
    if (fileName.startsWith('d') || fileName.startsWith('D')) {

        // Reading the data from Doctors.json
        var data = fs.readFileSync('./JsonFiles/Doctors.json');

        // Converting it into string.
        var j = JSON.parse(data);

        // Returning the string.
        return j;

    } else {

        // Reading the data from Patients.json
        var data = fs.readFileSync('./JsonFiles/Patients.json');

        // Converting it into string.
        var j = JSON.parse(data);

        // Returning the string.
        return j;
    }
}

/**
 * Function to update Patients.json file with patient's data.
 * 
 * @param {String} data  It is the string to be updated.
 */
function updatePatient(data) {

    // Updating Patients.json file with new object passed.
    fs.writeFileSync('./JsonFiles/Patients.json', JSON.stringify(data));

}

/**
 * Function to start the program by taking user input.
 */
function takeInput() {

    // Asking the user if he's patient or User.
    r.question("Are you a\n1. Patient or\n2. User\n", function(ans1) {

        if (ans1.trim() == 1) {

            // If user enters 1, register the patient.
            registerPatient();
        } else {

            // If user enters 2, ask his purpose.
            purposeUser();
        }
    });
}

/**
 * Function to Display all doctors available in the Clinique.
 */
function displayDoctors() {

    // Reading Doctors file.
    var d = readFromJson('doc');

    // For loop to run till all the doctor's are printed.
    for (var i = 0; i < d.doctors.length; i++) {

        // Printing doctor's id, name & speciality.
        console.log(d.doctors[i].id + ". " + d.doctors[i].name + " (" + d.doctors[i].special + ")");
    }
}

/**
 * Function to register the patient in the Clinique.
 */
function registerPatient() {

    // Reading Patient file.
    var d = readFromJson('patient');
    var size = d.size;

    // Asking the user to give his name.
    r.question("\nEnter your name: ", function(ans1) {

        // Asking the user to give his number.
        r.question("Enter your phone number: ", function(ans2) {

            // Asking the user to give his age.
            r.question("Enter your age: ", function(ans3) {

                //Validatin if user has enter number & age in Number format or not.
                if (!isNaN(ans2.trim() && !isNaN(ans3.trim()))) {

                    // Creating an object of the patient using the inputs.
                    var patient = {
                        name: ans1.trim(),
                        id: size,
                        phone: ans2.trim(),
                        age: ans3.trim(),
                        doc: " "
                    }

                    // Pushing the new object in patient file string.
                    d.patients.push(patient);

                    // Incrementing the size to check for id.
                    d.size++;

                    // Updating patient details in the file.
                    updatePatient(d);

                    // Asking the user if he wants to take the appointment now.
                    r.question("\nDo you want to take an appointment now? ", ans4 => {

                        if (ans4.trim().startsWith('y') || ans4.trim().startsWith('Y')) {

                            // If yes, then call chooseDoctor() function to choose a doctor.
                            chooseDoctor(Number(size));
                        } else {

                            // Else close the console.
                            console.log("Okay. Thank you for registering!");
                            r.close();
                        }
                    });
                } else {

                    // If the input is not a number, asking to enter again.
                    console.log("INVALID!! Please enter a number for phone & age! Try again.");
                    registerPatient();
                }
            });
        });
    });
}

/**
 * Function to choose a doctor for the patient and select a date for the appointment.
 * 
 * @param {Number} pId  It is the patient for which you have to choose the doctor.
 */
function chooseDoctor(pId) {

    // Calling displayDoctors() function to display the doctors to select from.
    displayDoctors();

    // Reading doctor data.
    var d = readFromJson('doc');

    // Asking the user to choose a doctor by ID.
    r.question("Choose a Doctor by ID: ", (ans1) => {

        // Checking if the ID input is valid or not.
        if (!isNaN(ans1.trim()) && ans1.trim() <= d.doctors.length) {

            // Asking the user to choose a date for that doctor.
            r.question("Choose a date to visit him (DD/MM/YY): ", function(ans2) {

                // Using regex to verify if the input is in correct date format.
                if (/\d\d\/\d\d\/\d\d/.test(ans2.trim())) {

                    // Checking if that doctor is available on that date.
                    if (isDocAvailable(ans1.trim(), ans2.trim())) {

                        // If yes, the asking the user to book an appointment.
                        r.question("Doctor is Avaialble!! Book an Appointment? ", function(ans3) {

                            // Calling getDoctorName() function to get doctor's name.
                            var dName = getDoctorName(ans1.trim());

                            if (ans3.trim().startsWith('y') || ans3.trim().startsWith('Y')) {

                                // If answer is yes, calling bookAppointment() function.
                                bookAppointment(pId, ans1.trim(), dName, ans2.trim());
                            } else {

                                // Else close the colsole.
                                console.log("Thank you for visiting!");
                                r.close();
                            }
                        });
                    } else {

                        // If doctor is not available, ask him to select another date.
                        r.question("Doctor is not available on selected date! Select Another Date!");
                        chooseDoctor(pId);
                    }
                } else {

                    // If date is not in correct format, re-enter again.
                    console.log("\nINVALID!! Please enter in correct date format!! <DD/MM/YY>\n");
                    chooseDoctor(pId);
                }
            });
        } else {

            // If entered ID is not valid, re-choose it.
            console.log("Please choose correct ID for Doctor by number!");
            chooseDoctor(pId);
        }
    });
}

/**
 * Function to book the appointment with the doctor for the patient on a specific date.
 * 
 * @param {Number} pId    It is the patient ID whose appointment is to booked.
 * @param {Number} dId    It is the Doctor's ID whom appointment is to be taken.
 * @param {String} dName  It is the Doctor's name whom appointment is to be taken.
 * @param {String} date   It is the date of the appointment.
 */
function bookAppointment(pId, dId, dName, date) {

    // Reading Doctor's & Patient's data.
    var doc = readFromJson('doc');
    var pat = readFromJson('pat');

    // Checking if array of that date is created or not.
    if (!doc.doctors[dId - 1].appointments.test.includes(date)) {

        // If not, create an empty array named on the date.
        doc.doctors[dId - 1].appointments[date] = [];
    }

    // Pushing the patient's ID in that date's array.
    doc.doctors[dId - 1].appointments[date].push(pId);

    // Pushing that date in test array.
    doc.doctors[dId - 1].appointments.test.push(date);

    // Adding doctor's name & appointment date into patient's file.
    pat.patients[pId - 1].doc = "Dr. " + dName + " on " + date;

    // Writing 'doc' & 'pat' into Doctors.json & Patients.json files.
    fs.writeFileSync('./JsonFiles/Doctors.json', JSON.stringify(doc));
    fs.writeFileSync('./JsonFiles/Patients.json', JSON.stringify(pat));

    console.log("Appointment Booked Successfully!\nDate: " + date);

    r.close();
}

/**
 * Function to get Doctor's name based on his ID.
 * 
 * @param {Number} id  It is the ID of the doctor.
 * 
 * @returns {String}   It is the Name of the Doctor.
 */
function getDoctorName(id) {

    // Reading the Doctor's data.
    var d = readFromJson('doc');

    // Returning the Doctor's Name.
    return d.doctors[id - 1].name;
}

/**
 * Function to check if the Doctor is available in the specified date or not.
 * 
 * @param {Number} id    It is the Doctor's ID.
 * @param {String} date  It is the date of booking the appointment.
 * 
 * @returns {Boolean}    It returns if the date is available or not.
 */
function isDocAvailable(id, date) {

    // Reading the Doctor's data.
    var d = readFromJson('doc');

    // Checking if that date is present in 'test' array or not.
    if (!d.doctors[id - 1].appointments.test.includes(date)) {

        // If not present, return true.
        return true;
    }

    // Cheking the doctor have more than 5 patients in that date or not.
    else if (d.doctors[id - 1].appointments[date].length <= 5) {

        // If not, return true.
        return true;
    } else {

        // Else return false.
        return false;
    }
}

/**
 * Function to check the purpose of the user.
 */
function purposeUser() {

    // Displaying the patients.
    var p = displayPatients();

    // Asking the user to select the patient to change the appointment.
    r.question("Hello User! Choose a patient ID to set/change his/her appointment! ", (ans1) => {
        if (!isNaN(ans1.trim()) && ans1.trim() < p) {

            // Calling chooseDoctor() function to choose the doctor for appointment.
            chooseDoctor(Number(ans1.trim()));
        } else {

            // If the ID is invalid, trying again.
            console.log("INVALID! Choose a patient by ID only! Try again.");
            purposeUser();
        }
    });
}

/**
 * Function to display the patients.
 */
function displayPatients() {

    // Reading the Patients data.
    var p = readFromJson('pat');

    // For loop will run till the size of the patients.
    for (var i = 0; i < p.size - 1; i++) {

        // Printing the patients data.
        console.log(p.patients[i].id + ". " + p.patients[i].name + "  " + p.patients[i].age +
            " " + p.patients[i].doc);
    }

    // Return size of the patient's array.
    return p.size;
}

// Calling takeInput() function to start the program.
takeInput();