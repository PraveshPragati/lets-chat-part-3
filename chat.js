// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyD9UfXldzfoJvT6RnOrJCLOxpf0sMxsEvQ",
    authDomain: "practice-b3770.firebaseapp.com",
    databaseURL: "https://practice-b3770-default-rtdb.firebaseio.com",
    projectId: "practice-b3770",
    storageBucket: "practice-b3770.appspot.com",
    messagingSenderId: "777586012658",
    appId: "1:777586012658:web:7b573b024fed5863ddbb6b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}





