import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { ENV_FIREBASE } from "../constant/env";

const app = initializeApp(ENV_FIREBASE);
const firestore = getFirestore(app);

export { app, firestore };
