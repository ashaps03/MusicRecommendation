
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const dbRef = ref(database, 'users/');

onValue(dbRef, (snapshot) => {
    if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Data fetched from database:", data);
    } else {
        console.log("No data available at the reference path");
    }
}, (error) => {
    console.error("Error fetching data:", error);
});