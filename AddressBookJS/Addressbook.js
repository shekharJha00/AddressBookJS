class Person {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
function addContact(firstName, lastName, address, city, state, zip, phoneNumber, email, addressBook) {
    
    newBook = addressBook.filter(contact => contact.firstName === firstName && contact.lastName === lastName);

    newBook.reduce( () => countContacts++, countContacts = 0);

    if (countContacts > 0) {
        console.log(" Duplicate entry! try Unique Details");
        return addressBook;
    }

    check = true;
    check = check && nameCheck.test(firstName);
    check = check && nameCheck.test(lastName);
    check = check && addressCityStateCheck.test(address);
    check = check && addressCityStateCheck.test(city);
    check = check && addressCityStateCheck.test(state);
    check = check && zipCheck.test(zip);
    check = check && phoneCheck.test(phoneNumber);
    check = check && emailCheck.test(email);

    if(check == true) {
        newContact = new Person(firstName, lastName, address, city, state, zip, phoneNumber, email);
        addressBook.push(newContact);
        console.log(" Contact entered successfully");
    }
    else {
        console.log(" Please enter valid details!");
    }

    return addressBook;

}
function findContact(firstName, lastName) {

    foundContact = null;
    addressBook.forEach(contact => {
        if (contact.firstName === firstName) {
            if (contact.lastName === lastName) {
                foundContact = contact;
            }
        }
    });

    if (foundContact == null) {
        console.log(" The contact was not found!");
    }

    return foundContact;
    
}

function editContact(addressBook, firstName, lastName, option, newValue) {
    contact = findContact(firstName, lastName, addressBook);

    if(contact == null) {
        console.log(" the contact we got was null");
        return null;
    }

    if (option === "address") {
        contact.address = newValue;
    }
    else if (option === "city") {
        contact.city = newValue;
    }
    else if (option === "state") {
        contact.state = newValue;
    }
    else if (option === "zip") {
        contact.zip = newValue;
    }
    else if (option === "phone") {
        contact.phoneNumber = newValue;
    }
    else if (option === "email") {
        contact.email = newValue;
    }

    return contact;

}

nameCheck = new RegExp("^[A-Z][a-z]{2,}$");
addressCityStateCheck = new RegExp("^[a-z A-Z]{4,}$");
emailCheck = new RegExp("^[\\w+-]+(\\.[\\w-]+)*@[^_\\W]+(\\.[^_\\W]+)?(?=(\\.[^_\\W]{3,}$|\\.[a-zA-Z]{2}$)).*$");
phoneCheck = new RegExp("^[0-9]{1,3}[\\s][0-9]{10}$");
zipCheck = new RegExp("^[0-9]{3,6}$")

addressBook = [];

addressBook = addContact("Shekhar", "Jha", "Namkum", "Ranchi", "Jharkhand", 834010, "91 1234567890", "abc@gmail.com", addressBook);
addressBook = addContact("Rahul", "Singh", "Namkum", "Ranci", "Jharkhand", 345343, "91 1845672348", "xyz@gmail.com", addressBook);
addressBook = addContact("Shekhar", "Jha", "Namkum", "Ranchi", "Jharkhand", 834010, "91 1234567890", "abc@gmail.com", addressBook);
console.log(addressBook);

  


