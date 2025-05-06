// Firebase Configuration and Initialization
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Function to show the User page
function showUserPage() {
    document.getElementById('userPage').style.display = 'block';
    document.getElementById('AdminPage').style.display = 'none';
    document.getElementById('staffPage').style.display = 'none';
}

// Function to show the Admin page
function showAdminPage() {
    document.getElementById('userPage').style.display = 'none';
    document.getElementById('AdminPage').style.display = 'block';
    document.getElementById('staffPage').style.display = 'none';
}

// Function to show the Staff page
function showStaffPage() {
    document.getElementById('userPage').style.display = 'none';
    document.getElementById('AdminPage').style.display = 'none';
    document.getElementById('staffPage').style.display = 'block';
}
