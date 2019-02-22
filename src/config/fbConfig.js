  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  var config = {
    apiKey: "AIzaSyC_6BwI_XOckyvEIQdOqH09p7B4ipOjpjc",
    authDomain: "create-project-app-1c512.firebaseapp.com",
    databaseURL: "https://create-project-app-1c512.firebaseio.com",
    projectId: "create-project-app-1c512",
    storageBucket: "create-project-app-1c512.appspot.com",
    messagingSenderId: "286934836783"
  };
  firebase.initializeApp(config);


  export default firebase;
  