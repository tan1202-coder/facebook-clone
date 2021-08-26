import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCMq-zJoqZLLGNyFCwktlAegHV0_qDdd8M",
    authDomain: "facebook-clone-e96b9.firebaseapp.com",
    projectId: "facebook-clone-e96b9",
    storageBucket: "facebook-clone-e96b9.appspot.com",
    messagingSenderId: "350847627794",
    appId: "1:350847627794:web:326cc3f5f2a9ae99059ecb",
    measurementId: "G-JZMJ0RW08Y"
  };

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage()

  export {firebase as default, storage}