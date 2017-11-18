$(document).ready(function() {
    $("#birthday").datepicker();
	$('#birthday').datepicker("option", "onSelect", function(dateText, inst) {
    var birthDate = $(this).datepicker('getDate');
    var userAge = getAge(birthDate);
	if (userAge < 18) {
        alert("Sorry, you may not register.");
    }
	});
});

function getAge(birthDate) {
    var currentDate = new Date();
    var userAge = currentDate.getFullYear() - birthDate.getFullYear();
    var month = currentDate.getMonth() - birthDate.getMonth();
	var day = currentDate.getDate() - birthDate.getDate();
    if ((month < 0) || (month == 0 && day < 0)) {
        userAge--;
    }
    return userAge;
}

//var userAge = parseInt(prompt("What's your age?"),10);
//if (isNaN(userAge)) {
	//console.log("No input was entered.");
//} else if (userAge < 13) {
	//console.log("Sorry, may not register.");
//} else {
	//console.log("You may proceed to register.");
//}