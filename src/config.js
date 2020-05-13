import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebaseui  from 'firebaseui';

const config = {
  apiKey: "AIzaSyDkfq8j6Qxv4DCzgcA3qrBHallyZJgu7G8",
  authDomain: "uas-pbf-b9191.firebaseapp.com",
  databaseURL: "https://uas-pbf-b9191.firebaseio.com",
  projectId: "uas-pbf-b9191",
  storageBucket: "uas-pbf-b9191.appspot.com",
  messagingSenderId: "259571008678",
  appId: "1:259571008678:web:41ff4122e5744f34cbe067",
};

// to use firebase default UI to Login
const uiConfig = ({
  signInSuccessUrl: '/',
  signInOptions: [
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: 'image', // another option is 'audio'
        size: 'invisible', // other options are 'normal' or 'compact'
        badge: 'bottomright' // 'bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: 'IN'
    }
  ],
  tosUrl: '/terms-of-service' // This doesn't exist yet
})

// inittialize firebase
export const firebaseApp = firebase.initializeApp(config);

const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const startFirebaseUI = function (elementId) {
    ui.start(elementId, uiConfig)
}

// firebase database reference
export const goalRef = firebase.database().ref('goals');  
export const completeGoalRef = firebase.database().ref('completeGoals');