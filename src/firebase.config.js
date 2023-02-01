import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAIPDsMf2ZFYFujAHyvooAAyr2sIFDwcBQ',
  authDomain: 'house-marketplace-app-d6a83.firebaseapp.com',
  projectId: 'house-marketplace-app-d6a83',
  storageBucket: 'house-marketplace-app-d6a83.appspot.com',
  messagingSenderId: '1047010617564',
  appId: '1:1047010617564:web:23bb710125205e6ea52c19',
}

// Initialize Firebase
export const db = getFirestore()
