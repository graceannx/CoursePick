import * as firebase from 'firebase';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDC_9Kwq2jtkrpKQAIX0cIrORbEuzFl0d4",
    authDomain: "coursepicker-b1bf6.firebaseapp.com",
    databaseURL: "https://coursepicker-b1bf6.firebaseio.com",
    projectId: "coursepicker-b1bf6",
    storageBucket: "coursepicker-b1bf6.appspot.com",
    messagingSenderId: "174177148276",
    appId: "1:174177148276:web:6c13f5a5ccd080057fe021",
    measurementId: "G-1HFZD7ZZ7V"
};

firebase.initializeApp(firebaseConfig);

export { firebase };