// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
constfirebaseConfig = {
  apiKey: "AIzaSyB4HemkddsS56w_uy8efs3IFiTu30LU_Uo",
  authDomain: "fir-app-prueba-891a1.firebaseapp.com",
  projectId: "fir-app-prueba-891a1",
  storageBucket: "fir-app-prueba-891a1.appspot.com",
  messagingSenderId: "564349019210",
  appId: "1:564349019210:web:067aaddd90bfb7e91ef2b3",
  measurementId: "G-5GNPWYF9QS"
};

// Initialize Firebase
constapp = initializeApp(firebaseConfig);
constanalytics = getAnalytics(app);

// Inicializar Auth de Firebase
const auth=firebase.auth();

firebase.auth().createUserWithEmailAndPassword(email,contraseña).then(
  (userCredential)=>{
      //Registrarse
      var user=userCredential.user;
  }).cath((error)=>{
      var errorCode=error.code;
  })

  firebase.auth().signInWithEmailAndPassword(email,contraseña).then(
      (userCredential)=>{
          //Iniciar seción
          var user=userCredential.user;
      }).cath(
          (error)=>{
              var errorCode=error.code;
              var errorCode=error;
          })
  firebase.auth().signOut().then()     


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4HemkddsS56w_uy8efs3IFiTu30LU_Uo",
  authDomain: "fir-app-prueba-891a1.firebaseapp.com",
  projectId: "fir-app-prueba-891a1",
  storageBucket: "fir-app-prueba-891a1.appspot.com",
  messagingSenderId: "564349019210",
  appId: "1:564349019210:web:067aaddd90bfb7e91ef2b3",
  measurementId: "G-5GNPWYF9QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);