// Initialize Firebase(2)
  const firebaseConfig = {
    apiKey: "AIzaSyD2_SPlvBtz1uMfALDHezMYb5sjikRDAU8",
    authDomain: "loginform-85e86.firebaseapp.com",
    databaseURL: "https://loginform-85e86-default-rtdb.firebaseio.com",
    projectId: "loginform-85e86",
    storageBucket: "loginform-85e86.appspot.com",
    messagingSenderId: "345225757235",
    appId: "1:345225757235:web:956f827ba8575fbbfbd946",
    measurementId: "G-K9XJNJKCMP"
  };
firebase.initializeApp(firebaseConfig);

//Reference for form collection(3)
var formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document.getElementById('registrationform').addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  var name = getElementVal('name');
  var email = getElementVal('email');
  var password = getElementVal('password');
  var bio = getElementVal('bio');
  var job = getElementVal('job');
  var interest = getElementVal('interest');

  console.log(name, email, password, bio, job, interest);

  sendMessage(name, email, password, bio, job, interest);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

  //send message values
 const sendMessage = (name, email, password, bio, job, interest) =>{
  var newFormMessage = formMessage.push();

  newFormMessage.set({
    name: name,
    email: email,
    password: password,
    bio: bio,
    job: job,
    Interest: interest
  });
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
//Send Message to Firebase(4)

// function sendMessage(name, email, password, bio, job, interest) {
//   let newFormMessage = formMessage.push();
//   newFormMessage.set({
//     name: name,
//     email: email,
//     password: password,
//     bio: bio,
//     job: job,
//     Interest: interest
//   });
// }