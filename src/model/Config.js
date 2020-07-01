

export const  firebaseConfig = {
    apiKey: "AIzaSyA7sINlTqwdNmJCBX6NhyWA0wbi9LHAzsk",
    authDomain: "fir-app-c8507.firebaseapp.com",
    databaseURL: "https://fir-app-c8507.firebaseio.com",
    projectId: "fir-app-c8507",
    storageBucket: "fir-app-c8507.appspot.com",
    messagingSenderId: "783047203208",
    appId: "1:783047203208:web:039114d3c03e47b2edc23d"
  };

 export  const passwordReset = email => {
    return firebase.auth().sendPasswordResetEmail(email)
  }