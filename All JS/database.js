/*MESSAGE JS FIREBASE***********/
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_CONFIG",
    authDomain: "YOUR_FIREBASE_CONFIG",
    databaseURL: "YOUR_FIREBASE_CONFIG",
    projectId: "YOUR_FIREBASE_CONFIG",
    storageBucket: "YOUR_FIREBASE_CONFIG",
    messagingSenderId: "YOUR_FIREBASE_CONFIG",
    appId: "YOUR_FIREBASE_CONFIG",
    measurementId: "YOUR_FIREBASE_CONFIG"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("Name");
  var email = getElementVal("Email");
  var message = getElementVal("Message");

  saveMessages(name, email, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    Name: name,
    Email: email,
    Message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};