//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyCiXGeAH9LffNhXg4tZhKt7GDm2R9CTZyg",
  authDomain: "kwitter-5ffa2.firebaseapp.com",
  databaseURL: "https://kwitter-5ffa2-default-rtdb.firebaseio.com",
  projectId: "kwitter-5ffa2",
  storageBucket: "kwitter-5ffa2.appspot.com",
  messagingSenderId: "602988043180",
  appId: "1:602988043180:web:09706777ad154881bb3809"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 
  
  
  

  function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
  