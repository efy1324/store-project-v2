import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBLDN88-QBPTI17Q24AaulM53SzM-KoH7E',
  databaseURL:"https://colbo-efrat-default-rtdb.europe-west1.firebasedatabase.app",
  authDomain: 'colbo-efrat.firebaseapp.com',
  projectId: 'colbo-efrat',
  storageBucket: 'colbo-efrat.appspot.com',
  messagingSenderId: '321193707355',
  appId: '1:321193707355:web:966c2349a9f1554dd57c7e',
  measurementId: 'G-BE87X4GVV6',
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export function readData(cb) {
  onValue(ref(database), (snapshot) => {
    const data = snapshot.val();
    cb(data)
    console.log(data);
    if (!data !== null) {
      console.log('no data');
    }
  });
}

export default database;
