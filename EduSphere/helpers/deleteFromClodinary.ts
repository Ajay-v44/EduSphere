import axios from "axios";

export const deleteFromClodinary = async (publicId: string) => {
  try {
    const url = `https://api.cloudinary.com/v1_1/${process.env.EXPO_PUBLIC_CLOUDINARY_NAME}/image/destroy`; // Replace with your Cloudinary name
    const authHeader =
      "Basic " +
      btoa(
        `${process.env.EXPO_PUBLIC_CLOUDINARY_KEY}:${process.env.EXPO_PUBLIC_CLOUDINARY_SECRET}`
      );
    const response = await axios.post(
      url,
      {
        public_id: publicId, // Pass the public_id
        invalidate: true,
      },
      {
        headers: {
          Authorization: authHeader,
        },
      }
    );
    if (response.data.result === "ok") {
      console.log(`Image with public ID ${publicId} deleted from Cloudinary.`);
      return true;
    } else {
      console.error(
        "Failed to delete the image from Cloudinary:",
        response.data
      );
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
