// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//validate if numbers
function IsNumbers(idnumber) {
    if (idnumber.match(/\D/) != null)
        return true;
    else
        return true;
}
//validate length
function IsIDNumberCorrectLength(idnumber) {
    if (idnumber.length != 13)
        return 0;
    else
        return 13;
}
//validate date of birth
function IsDateOfBirth() {

    //Start with an empty funtion

}

//Get Gender
function GetGender() { 

    var idNumber = document.getElementById("idnumber").value;

    if (IsNumbers(idNumber)
        && IsIDNumberCorrectLength(idNumber) == 13) {

        // get the gender
        var genderCode = idNumber.substring(6, 10);
        var gender = (genderCode) < 5000 ? "Female" : "Male";

        document.getElementById("gender").innerHTML = gender;
    }
    else {
        document.getElementById("gender").innerHTML = "The input in the ID number is invalid.";
    }
}

