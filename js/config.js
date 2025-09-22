// config.js

// Import and configure Firebase (v9+ modular style)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

// ✅ Firebase config
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

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// ✅ Export for use anywhere
export { app, auth, db, storage, analytics };
