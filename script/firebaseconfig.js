// // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn8uFXedr3jcHo1tKSOdLaWcfCbfyc2-4",
  authDomain: "ebo-front.firebaseapp.com",
  projectId: "ebo-front",
  storageBucket: "ebo-front.appspot.com",
  messagingSenderId: "178293199544",
  appId: "1:178293199544:web:e3eb6e57e1fe3fca801a4d",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

function renderCaptcha() {
  console.log("Rendenring caotch");
  recaptchaVerifier.render().then((widgetId) => {
    window.recaptchaWidgetId = widgetId;
  });
}

function sendOTP() {
  console.log("Sent otp running");
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, "+917004850484", appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log("Message Sent");
      // ...
      verifyCode();
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
      console.log("Message not sent");
    });
}

function verifyCode() {
  const code = parseInt(window.prompt("Enter number"));
  confirmationResult
    .confirm(code)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      // ...
      console.log("USer signed In");
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      console.log("User cannot sign in!!");
    });
}
// sendOTP.addEventListener("click", function () {
//   console.log("Clicked");
// });

// // // const phoneNumber = document.getElementById("phone-number");
// // // const appVerifier = window.recaptchaVerifier;

// // // const code = getCodeFromUserInput();

// // // console.log(document.getElementsByClassName("send-otp"));
// // // let sendOtp = document.getElementById("sent-otp-but");
// // // console.log(sendOtp);
// // // sendOtp.addEventListener("click", function () {
// // //   console.log("Clicked");
// // // });

let profileButton = document.getElementsByClassName("user-p-cont")[0];
profileButton.addEventListener("click", function () {
  console.log("runnnn");
  window.recaptchaVerifier = new RecaptchaVerifier(
    "loggg",
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log("Captch completed");
        // sendOTP();
      },
    },
    auth
  );
  document.getElementsByClassName("send-otp")[0].addEventListener("click", function(){
    console.log("working dude!!")
  })
  renderCaptcha();
  sendOTP();
});
