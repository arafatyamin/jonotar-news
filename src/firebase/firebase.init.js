import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBgbk7uSDdDtKAnky9Q29T8ES2R0GNecnE",
  authDomain: "news-jonogon.firebaseapp.com",
  projectId: "news-jonogon",
  storageBucket: "news-jonogon.appspot.com",
  messagingSenderId: "533120052694",
  appId: "1:533120052694:web:10bdcea6aef85d39d78877"
};

const app = initializeApp(firebaseConfig);
export default app;