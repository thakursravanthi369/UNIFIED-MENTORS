// Firebase Configuration (replace with your own Firebase project's details)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID",
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  

// Function to toggle visibility of pages
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
  
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
      selectedPage.style.display = 'block';
    }
  }
  
  // Admin Functions
  function createMember() {
    const name = prompt("Enter Member Name:");
    const age = prompt("Enter Member Age:");
    const membershipType = prompt("Enter Membership Type:");
    const fee = prompt("Enter Fee Amount:");
  
    const member = { name, age, membershipType, fee };
  
    db.collection("members").add(member)
      .then(docRef => alert(`Member added with ID: ${docRef.id}`))
      .catch(error => console.error("Error adding member: ", error));
  }
  
  function updateDeleteMember() {
    const memberId = prompt("Enter Member ID to update/delete:");
    db.collection("members").doc(memberId).get()
      .then(doc => {
        if (doc.exists) {
          const member = doc.data();
          const newName = prompt("Enter new name:", member.name);
          db.collection("members").doc(memberId).update({ name: newName });
          alert("Member updated!");
        } else {
          alert("Member not found!");
        }
      })
      .catch(error => console.error("Error updating member: ", error));
  }
  
  function createBill() {
    const memberId = prompt("Enter Member ID:");
    const amount = prompt("Enter Amount:");
    const bill = { memberId, amount, date: new Date() };
  
    db.collection("bills").add(bill)
      .then(docRef => alert(`Bill created with ID: ${docRef.id}`))
      .catch(error => console.error("Error creating bill: ", error));
  }
  
  function assignFeePackage() {
    const memberId = prompt("Enter Member ID to assign fee package:");
    const feePackage = prompt("Enter Fee Package (e.g., 'Basic', 'Premium'):");
    
    db.collection("members").doc(memberId).update({ feePackage })
      .then(() => alert("Fee Package assigned successfully!"))
      .catch(error => console.error("Error assigning fee package: ", error));
  }
  
  function sendNotification() {
    const notification = prompt("Enter Notification message:");
    db.collection("notifications").add({ message: notification, date: new Date() })
      .then(docRef => alert(`Notification sent with ID: ${docRef.id}`))
      .catch(error => console.error("Error sending notification: ", error));
  }
  
  function generateReport() {
    db.collection("members").get()
      .then(querySnapshot => {
        let report = "Member Report:\n";
        querySnapshot.forEach(doc => {
          report += `${doc.id} - ${doc.data().name}\n`;
        });
        alert(report);
      })
      .catch(error => console.error("Error generating report: ", error));
  }
  
  // Member Functions
  function viewBillReceipts() {
    const memberId = prompt("Enter Member ID to view bill receipts:");
    db.collection("bills").where("memberId", "==", memberId).get()
      .then(querySnapshot => {
        let receipts = "Bill Receipts:\n";
        querySnapshot.forEach(doc => {
          receipts += `Amount: ${doc.data().amount}, Date: ${doc.data().date.toDate()}\n`;
        });
        alert(receipts);
      })
      .catch(error => console.error("Error retrieving bill receipts: ", error));
  }
  
  function viewNotifications() {
    db.collection("notifications").get()
      .then(querySnapshot => {
        let notifications = "Notifications:\n";
        querySnapshot.forEach(doc => {
          notifications += `${doc.data().message} - ${doc.data().date.toDate()}\n`;
        });
        alert(notifications);
      })
      .catch(error => console.error("Error retrieving notifications: ", error));
  }
  