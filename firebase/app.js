  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA_kKGrRWZc3_MXD-OQOW7CiNkEyufW9Oc",
    authDomain: "projeto-strangerthings-6478b.firebaseapp.com",
    projectId: "projeto-strangerthings-6478b",
    storageBucket: "projeto-strangerthings-6478b.appspot.com",
    messagingSenderId: "384827460500",
    appId: "1:384827460500:web:45794840a5d495527d1d81"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app