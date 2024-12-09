import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
  authDomain: `${process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL}`,
  projectId: `${process.env.EXPO_PUBLIC_FIREBASE_PROJECt_ID}`,
  storageBucket: `${process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.EXPO_PUBLIC_FIREBASE_MESSAGINGSENDERID}`,
  appId: `${process.env.EXPO_PUBLIC_FIREBASE_APP_ID}`,
  measurementId: `${process.env.EXPO_PUBLIC_FIREBASE_MEASURMENT_ID}`,
};
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
