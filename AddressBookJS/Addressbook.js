var one = {
    firstName: "shekhar",
    lastName: "jha",
    zip:"222333",
    city:"ranchi",
    state:"jharkhand",
    phoneNumber: "1234567891",
    email: "abc@abc.com"
};

var Two = {
    firstName: "Naman",
    lastName: "nagwani",
    phoneNumber: "1234567890",
    zip:"111333",
    city:"Raipur",
    state:"chattisgarh",
    email: "xyz@xyz.com"
};

var contacts = [one,Two];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}
console.log(printPerson(one));



