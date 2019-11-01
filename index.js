const config = {
    apiKey: "AIzaSyBy4PcTduckWNbDQFQuAoAEpkOxbKYJK2s",
    authDomain: "getsi-id.firebaseapp.com",
    databaseURL: "https://getsi-id.firebaseio.com",
    projectId: "getsi-id",
    storageBucket: "getsi-id.appspot.com",
    messagingSenderId: "539988450369",
    appId: "1:539988450369:web:614ba78e1d5233304ffac0",
    measurementId: "G-2YD0RGP3RH"
  };
firebase.initializeApp(config);

var database = firebase.database();
database.ref('/').once('email', function(snapshot){
    console.log(snapshot.val());
  });
  var rootRef = database.ref('/');

rootRef.once('email', function(snapshot){
  console.log(snapshot.val());
});

function pushData(){
  var data = document.getElementById("dataValue").value;
  var dataRef = database.ref('/Email').push();
  dataRef.set({
    value: data
  });
}

pushDataRef = database.ref("/Email");
pushDataRef.on("child_added", function(snapshot){
  console.log("Below is the data from child_added");
  console.log(snapshot.val());
});

database.ref('/Email').once('email', function(snapshot){
  snapshot.forEach(function(data){
    console.log("Below are the child keys of the values in 'pushData'")
    console.log(data.key);
  });
  console.log(Object.keys(snapshot.val()));
});