const firebaseConfig = {
    apiKey: "AIzaSyAfEL6SY5Ea0MNugLS25jvwknWPeHFUobs",
    authDomain: "kwitter-82d59.firebaseapp.com",
    databaseURL: "https://kwitter-82d59-default-rtdb.firebaseio.com",
    projectId: "kwitter-82d59",
    storageBucket: "kwitter-82d59.appspot.com",
    messagingSenderId: "348479353066",
    appId: "1:348479353066:web:6aafe4157af0abde116793"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
  
              localStorage.setItem("room_name", room_name);
  
              window.location = "chat_msg.html";
  }



  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
        //start code
        console.log("Room Name -" + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoom(thid.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
        //end code
        });
    });
}
getData();


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
       window.location = "index.html";
}


