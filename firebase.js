// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBysLbvvotu8bMvKbwye8hfMeCIWVxh2yY',
  authDomain: 'react-native-todo-app-feaf5.firebaseapp.com',
  projectId: 'react-native-todo-app-feaf5',
  storageBucket: 'react-native-todo-app-feaf5.appspot.com',
  messagingSenderId: '22940320787',
  appId: '1:22940320787:web:68d8f9e7c139af0c10abe6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
