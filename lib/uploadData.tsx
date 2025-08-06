import { uploadData } from "./types";
import { db } from "../firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Helper: Upload to Cloudinary
const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);


  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData }
  );

  if (!response.ok) throw new Error("Cloudinary upload failed");

  const data = await response.json();
  return data.secure_url;
};

export const createAd = async ({
  category,
  location,
  youtube,
  title,
  description,
  price,
  userEmail,
  contactNumber,
  negotiable,
  images,
}: uploadData) => {
  let imagesUrl: Array<string> = [];

  try {
    // Upload provided images
    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        const url = await uploadToCloudinary(images[i]);
        imagesUrl.push(url);
      }
    } else {
      // Default Cloudinary placeholder (replace with your real uploaded URL)
      const placeholderUrl = "https://res.cloudinary.com/dm307hxxw/image/upload/w_800,h_500,c_fill,q_auto,f_auto/v1234567890/placeholders/no-image.png";
      imagesUrl.push(placeholderUrl);
    }

    // Save ad in Firestore
    await addDoc(collection(db, "ads"), {
      category,
      location,
      youtube,
      title,
      description,
      price,
      userEmail,
      negotiable,
      contactNumber,
      images: imagesUrl,
      createdAt: serverTimestamp(),
    });

    return { error: false, message: "Successfully Submitted" };
  } catch (error: any) {
    console.error("❌ Error creating ad:", error.message || error);
    return { error: true, message: error.message || "Unable to Submit AD" };
  }
};