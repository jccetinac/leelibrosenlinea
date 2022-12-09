import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBfOH1mFvvoA5ArNHTAPXa8OZTyjIJiyTc',
  authDomain: 'librosenlinea2022-50c14.firebaseapp.com',
  projectId: 'librosenlinea2022-50c14',
  storageBucket: 'librosenlinea2022-50c14.appspot.com',
  messagingSenderId: '143652946405',
  appId: '1:143652946405:web:f779fa2a3a7e852781ef0c',
  measurementId: 'G-KGBL7NCQG2',
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
