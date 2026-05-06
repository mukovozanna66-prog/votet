const firebaseConfig = {
  apiKey: "AIzaSyAaCAA4OSdJX2-G1NCbRjGYyujNlh9wxBU",
  authDomain: "vote-4f462.firebaseapp.com",
  databaseURL: "https://vote-4f462-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "vote-4f462",
  storageBucket: "vote-4f462.appspot.com",
  messagingSenderId: "677447645714",
  appId: "1:677447645714:web:2c08121a9e92955d32b6cb"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();