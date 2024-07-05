import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, you can redirect them to the welcome page if needed
        console.log('User is signed in:', user);
        if (window.location.pathname === '/' || window.location.pathname === '/register') {
            window.location.href = '/welcomePage';
        }
    } else {
        // No user is signed in, redirect to sign in page
        console.log('No user is signed in.');
        if (window.location.pathname !== '/' && window.location.pathname !== '/register') {
            window.location.href = '/';
        }
    }
});
