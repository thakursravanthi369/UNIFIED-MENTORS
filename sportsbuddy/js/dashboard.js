import { db, auth } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { logAction } from './logger.js';

document.getElementById('eventForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const event = {
    name: document.getElementById('eventName').value,
    location: document.getElementById('eventLocation').value,
    time: document.getElementById('eventTime').value,
    userId: auth.currentUser?.uid || 'anonymous',
  };
  await addDoc(collection(db, 'events'), event);
  logAction('Event Created', event.userId);
});
