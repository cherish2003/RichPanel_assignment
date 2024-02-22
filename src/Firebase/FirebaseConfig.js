import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlXaScaLffk9FWWA4y2exlrLbNC8tg8pw",
  authDomain: "helpspot-a67a4.firebaseapp.com",
  projectId: "helpspot-a67a4",
  storageBucket: "helpspot-a67a4.appspot.com",
  messagingSenderId: "289777601282",
  appId: "1:289777601282:web:dc60d8129210df8abe901b",
  measurementId: "G-SELFNJNL0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// export const doSignOut = () => {
//   return auth.signOut();
// };
export { auth, app };
