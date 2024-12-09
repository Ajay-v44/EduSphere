import axios from "axios";

export const uploadToCloudinary = async (image: any) => {
  const formData: any = new FormData();
  formData.append("file", {
    uri: image.uri.startsWith("file://") ? image.uri : `file://${image.uri}`,
    name: image.fileName || "uploaded_image.jpg",
    type: image.mimeType || "image/jpeg",
  });
  formData.append(
    "upload_preset",
    `${process.env.EXPO_PUBLIC_UPLOAD_PRESET_NAME}`
  );
  const url = `https://api.cloudinary.com/v1_1/${process.env.EXPO_PUBLIC_CLOUDINARY_NAME}/image/upload`; // Replace with your Cloudinary name
  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response?.data?.secure_url;
  } catch (error: any) {
    console.error("Cloudinary Upload Error:", error.message);
    return null;
  }
};
