import { storage } from "@/initialize-firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImage = async (imageUrl: string) => {
  try {
    const response = await fetch(imageUrl); // Fetch the file from the local URI
    const blob = await response.blob(); // Convert to Blob

    const fileName = `images/${imageUrl+Date.now()}`; // Unique file name
    const storageRef = ref(storage, fileName);

    // Upload the Blob to Firebase Cloud Storage
    const snapshot = await uploadBytes(storageRef, blob);

    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.log(error);
  }
};
