const firebaseConfig = {
    apiKey: "AIzaSyBOPjAMTbvv6CUHePR1ApBooG40FB_0lmo",
    authDomain: "auth-with-firebase-9cf99.firebaseapp.com",
    projectId: "auth-with-firebase-9cf99",
    storageBucket: "auth-with-firebase-9cf99.appspot.com",
    messagingSenderId: "616749216760",
    appId: "1:616749216760:web:f10a8394e784fa83d99c0d"
  };
try{
    firebase.initializeApp(firebaseConfig)
}
catch(e){
    console.log(e)
}