import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDMjK6oz29wIoZcf2YbrrIY7U2NQqENTMI",
    authDomain: "demologinnhomh.firebaseapp.com",
    databaseURL: "https://demologinnhomh-default-rtdb.firebaseio.com",
    projectId: "demologinnhomh",
    storageBucket: "demologinnhomh.appspot.com",
    messagingSenderId: "54126276128",
    appId: "1:54126276128:web:bc2c1c46937b9e0ec4d645"
};
firebase.initializeApp(firebaseConfig);

export {firebase};
const firebaseAuth = firebase.auth();
export default  firebaseAuth;
