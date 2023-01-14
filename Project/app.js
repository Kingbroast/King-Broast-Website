
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase, ref, set  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDuxn4R_xZOTVOhN70Apvokc0wERP9HlkI",
    authDomain: "king-broast-website.firebaseapp.com",
    projectId: "king-broast-website",
    storageBucket: "king-broast-website.appspot.com",
    messagingSenderId: "504983619986",
    appId: "1:504983619986:web:ca0d9fc89d1901e7d2194b",
    measurementId: "G-9DDT0YV333"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();


  var Email = document.getElementById('Email')
  var Name = document.getElementById('Name')
  var Comment_ = document.getElementById('comment_')

  window.save = function () {
    var val1 = {
        E_mail: Email.value,
        Name_:Name.value,
        Comment_:Comment_.value
    };
    console.log(val1)
    val1.id = Math.random().toString().slice(2);
    const taskRef = ref(database, `Comment/${val1.id}/`);
    set(taskRef, val1);
    alert('Your comments Submitted')
    Comment_.innerHTML = "";
    Email.innerHTML = "";
    Name.innerHTML = "";
};






window.locationmap= function(){
    window.location.assign('https://www.google.com/maps/place/King+Broast+and+Pizza/@24.8283867,67.1571659,16.75z/data=!4m5!3m4!1s0x3eb33a58d2cadd23:0x5f404ccc9dc4ebc4!8m2!3d24.8280625!4d67.1596875')
}