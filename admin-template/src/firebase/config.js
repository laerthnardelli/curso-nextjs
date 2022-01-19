
import firebase from "firebase/app";
import 'firebase/auth';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
}

//criar na raiz do projeto um aquivo com o nome .env.local para armazenar as chaves do firebase. Obs: adicionar no .gitignore o .env.local caso não tenha.
// NEXT_PUBLIC_FIREBASE_API_KEY= a sua chave
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= a sua chave
// NEXT_PUBLIC_FIREBASE_PROJECT_ID= a sua chave

export default firebase;