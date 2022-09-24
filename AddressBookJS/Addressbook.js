var person = {
    firstName:"", 
    lastName:"",
    address:"",
    city:"",
    state:"",
    zip:"",
    phone:"",
    email:""
  };
  validateName(person.firstName = prompt("Please enter your First name:"));
  validateName(person.lastName = prompt("Please enter your Last name:"));
  validateACS(person.address = prompt("Please enter your Address:"));
  validateACS(person.city =prompt("Please enter your City:"));
  validateACS(person.state = prompt("Please enter your State:"));
  validateZip(person.zip = prompt("Please enter your Zip:"));
  validatePhone(person.phone = prompt("Please enter your Phone:"));
  validateEmail(person.email = prompt("Please enter your Email:"));
  console.log(person);
  
  function validatePhone(num) {
      const re = /^[0-9]{1,2} [0-9]{10}$/g;
      let result = num.match(re);
      if (result) {
          console.log('The number is valid.');
      }
      else {
          let num = prompt('Enter number in XX XXXXXXXXX format:');
          validatePhone(num);
      }
  }
  
  function validateName(name) {
      const re = /^[A-Z][a-z]{2,}$/g;
      let result = name.match(re);
      if (result) {
          console.log('The name is valid.');
      }
      else {
          let name = prompt('Enter Name in Aabc format:');
          validateName(name);
      }
  }
  function validateACS(input) {
      const re = /^[A-Z a-z]{4,}$/g;
      let result = input.match(re);
      if (result) {
          console.log('The input is valid.');
      }
      else {
          let input = prompt('Enter in abcd format:');
          validateName(input);
      }
  }
  function validateZip(zip) {
      const re = /^[0-9]{5,}$/g;
      let result = zip.match(re);
      if (result) {
          console.log('zip is valid.');
      }
      else {
          let zip = prompt('Enter Zip in XXXXX format:');
          validateZip(zip);
      }
  }
  function validateEmail(email) {
      const re = /^[a-z0-9]+([.+_-]?[a-z0-9]+)?@[a-z0-9]+[.]([a-z0-9]+[.])?[a-z]{2,}$/g;
      let result = email.match(re);
      if (result) {
          console.log('The Email is valid.');
      }
      else {
          let name = prompt('Enter Email in  format:');
          validateEmail(email);
      }
  }



