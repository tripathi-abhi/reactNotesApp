import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCfr2DPN9qzg4LA3u9rFDwEs_0kDXfB-ag",
	authDomain: "todo-app-d1205.firebaseapp.com",
	databaseURL: "https://todo-app-d1205.firebaseio.com",
	projectId: "todo-app-d1205",
	storageBucket: "todo-app-d1205.appspot.com",
	messagingSenderId: "676118001552",
	appId: "1:676118001552:web:1be613b923670314436515",
	measurementId: "G-ND7R583TPG",
});

const db = firebaseApp.firestore();

// const auth = firebase.auth();

export default db;
