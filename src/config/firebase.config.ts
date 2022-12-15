
import { initializeApp } from '@firebase/app'
import { getAuth } from '@firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC0d5K0sndLL1muiXYnicMAa9-MMx9tDpA',
  authDomain: 'lancheria-369b4.firebaseapp.com',
  projectId: 'lancheria-369b4',
  storageBucket: 'lancheria-369b4.appspot.com',
  messagingSenderId: '42264224092',
  appId: '1:42264224092:web:ffb02cc46a6fbf599a2199'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
