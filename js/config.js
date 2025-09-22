// config.js

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWUXQs1W0IBT2J27eEllfT8jPtZD6Fx20",
  authDomain: "re-el-eed0d.firebaseapp.com",
  databaseURL: "https://re-el-eed0d-default-rtdb.firebaseio.com",
  projectId: "re-el-eed0d",
  storageBucket: "re-el-eed0d.appspot.com",
  messagingSenderId: "676690470943",
  appId: "1:676690470943:web:c18bc16fbf23445c9ecd2a",
  measurementId: "G-BXJEJLTTD1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Optional: enable analytics if you plan to use it
if (typeof firebase.analytics === "function") {
  firebase.analytics();
}
