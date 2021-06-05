import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCZnb5D7l9s_D3ZB7-OOgXXH8InomH2LUI",
  authDomain: "crud-e0f00.firebaseapp.com",
  databaseURL: "https://crud-e0f00-default-rtdb.firebaseio.com",
  projectId: "crud-e0f00",
  storageBucket: "crud-e0f00.appspot.com",
  messagingSenderId: "794349666041",
  appId: "1:794349666041:web:55dbb28108fe3b0e0dac28"
};
export const firebaseapp = firebase.initializeApp(firebaseConfig);
export const contatoDB = firebaseapp.database().ref().child('contato');
