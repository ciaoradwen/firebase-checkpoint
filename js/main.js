function changeBold(){
 var text = document.getElementById("message");
 if (text.style.fontWeight != "bold") {
     text.style.fontWeight="bold"
 } 
  else {
      text.style.fontWeight="normal"
    } 
 }

function changeItalic(){
    var text= document.getElementById("message");
if(text.style.fontStyle !="italic"){
    text.style.fontStyle="italic"
}
else{
    text.style.fontStyle="normal"
}
 }
 function changeUnderline(){
     var text =document.getElementById("message");
     if(text.style.textDecoration != "underline"){
         text.style.textDecoration="underline"
     } 
     else{
         text.style.textDecoration="none"
 }  
}


function changeSize(event){
    var text = document.getElementById("message");
    text.style.fontSize=event.value;
}
function changestyle(event){
    var text=document.getElementById("message");
    text.style.fontFamily=event.value;
}

$('#bouton0').on('click', function () {
    $('#Track0').modal();
    
})

$('#bouton1').on('click', function () {
    $('#Track1').modal();
    
})

$('#bouton2').on('click', function () {
    $('#Track2').modal();
    
})
$('#bouton3').on('click', function () {
    $('#Track3').modal();
    
})
$('#bouton4').on('click', function () {
    $('#Track4').modal();
    
})
$('#bouton5').on('click', function () {
    $('#Track5').modal();
    
})
$('#bouton6').on('click', function () {
    $('#Track6').modal();
    
})
$('#bouton7').on('click', function () {
    $('#Track7').modal();
    
})
$('#bouton8').on('click', function () {
    $('#Track8').modal();
    
})
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAMGTMb0PZX6nh9e9RUYad3otUXl8AylVA",
    authDomain: "web1-e7b42.firebaseapp.com",
    databaseURL: "https://web1-e7b42.firebaseio.com",
    projectId: "web1-e7b42",
    storageBucket: "web1-e7b42.appspot.com",
    messagingSenderId: "1004232803428",
    appId: "1:1004232803428:web:deb4f2f440833e2fce8b71",
    measurementId: "G-5RL5G48HH5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase)
  
//save message to firebase
  var contactsRef = firebase.database().ref('contactsDatabase');// setting the name of yourdata base//
  function saveContact (name, track, email, phone){
      var newContactRef = contactsRef.push();
      newContactRef.set({
          name: name,
          track: track,
          email: email,
          phone: phone,
      })
  }

  function submitForm(event){
      event.preventDefault();
      //get values
      var name = document.getElementById('name').value;
      var track = document.getElementById('track').value;
      var email= document.getElementById('email').value;
      var phone =  document.getElementById('phone').value;
      console.log(name, track)
     
      saveContact(name, track, email, phone);//sending data to our database
    document.getElementById('contactForm').reset();
    }

  document.getElementById('contactForm').addEventListener('submit',submitForm);

  
  