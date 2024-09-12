function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let nic = document.getElementById("nic").value;
    
    let emailPattern = /^[^ ]+@gmail\.com$/; 
    let phonePattern = /^[0-9]{10}$/;        
    let nicPattern = /^[0-9]{12}$/;          

    if (name == "" || email == "" || phone == "" || nic == "") {
        alert("All fields must be filled out.");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address that ends with @gmail.com.");
        return false;
    }

    if (!phone.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    if (!nic.match(nicPattern)) {
        alert("Please enter a valid 12-digit NIC number.");
        return false;
    }

    alert("Submit Success!");
    
    return true;
}






function validateContactForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let nic = document.getElementById("nic").value;
    let message = document.getElementById("message").value;
    
    let emailPattern = /^[^ ]+@gmail\.com$/; 
    let phonePattern = /^[0-9]{10}$/;        
    let nicPattern = /^[0-9]{12}$/;          

    if (name == "" || email == "" || phone == "" || nic == "" || message == "") {
        alert("All fields must be filled out.");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address that ends with @gmail.com.");
        return false;
    }

    if (!phone.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    if (!nic.match(nicPattern)) {
        alert("Please enter a valid 12-digit NIC number.");
        return false;
    }

    alert("Message sent successfully!");
    
    return true;
}





document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone').value;
    const nicNumber = document.getElementById('nic').value;
    const password = document.getElementById('password').value;
  
    if (!username || !email || !phoneNumber || !nicNumber || !password) {
      alert('Please fill in all fields.');
      return false;
    }
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address ending with @gmail.com.');
      return false;
    }
  
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }
  
    const nicPattern = /^\d{12}$/;
    if (!nicPattern.test(nicNumber)) {
      alert('Please enter a valid 12-digit NIC number.');
      return false;
    }
  
    alert('Signup successful!');
  
    document.getElementById('signupForm').reset();
  
    window.location.reload();
  
    return true; 
  });
  