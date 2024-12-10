import axios from "axios";

export const deleteFromCloudinary = async (publicId: string) => {
  try {
    const url = `https://api.cloudinary.com/v1_1/${process.env.EXPO_PUBLIC_CLOUDINARY_NAME}/image/destroy`;

    // Use btoa for Base64 encoding
    const authHeader = `Basic ${btoa(
      `${process.env.EXPO_PUBLIC_CLOUDINARY_KEY}:${process.env.EXPO_PUBLIC_CLOUDINARY_SECRET}`
    )}`;
    // Ensure public_id does not include the version
    const sanitizedPublicId = publicId.includes("/")
      ? publicId.split("/").pop() // Remove the version if present
      : publicId;
    console.log(sanitizedPublicId);
    const response = await axios.post(
      url,
      {
        public_id: sanitizedPublicId, // Use sanitized public_id
        invalidate: true,
      },
      {
        headers: {
          Authorization: authHeader,
        },
      }
    );

    if (response.data.result === "ok") {
      console.log(
        `Image with public ID ${sanitizedPublicId} deleted from Cloudinary.`
      );
      return true;
    } else {
      console.error(
        "Failed to delete the image from Cloudinary:",
        response.data
      );
      return false;
    }
  } catch (err) {
    console.error("Error deleting image from Cloudinary:", err);
    return false;
  }
};
