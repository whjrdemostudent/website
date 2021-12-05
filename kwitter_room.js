
//ADD YOUR FIREBASE LINKS HERE
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
    user_name = localStorage.getItem("user_name");
    console.log("user_name -" + user_name);
   document.getElementById("user_name").innerHTML = "Welcome "+ "Sumasri" + "!";
   
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name,name");
      window.location="kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
