import { 
  getFirestore, 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where,
  orderBy 
} from "firebase/firestore";
import { app } from "../firebase"; 
import { adData } from "./types"; // Ensure adData is correct

const db = getFirestore(app);

// ✅ Helper: Safely map Firestore doc to adData
const mapDocToAdData = (docSnap: any): adData => {
  const data = docSnap.data();
  return {
    id: String(docSnap.id),
    title: String(data.title || "Untitled"),
    description: String(data.description || ""),
    price: Number(data.price || 0),
    location: String(data.location || ""),
    images: Array.isArray(data.images) ? data.images.map(String) : [],
    userEmail: data.userEmail ? String(data.userEmail) : "",
    
    // 🔹 Convert Firestore Timestamp to millis for Next.js
    createdAt: data.createdAt?.toMillis?.() || null,

    youtube: String(data.youtube || ""),
    contactNumber: Number(data.contactNumber || 0),
    negotiable: String(data.negotiable || "No"),
  };
};

/**
 * ✅ Fetch all ads
 */
export const fetchAllAds = async (): Promise<adData[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "ads"));
    return querySnapshot.docs.map(mapDocToAdData);
  } catch (error) {
    console.error("Error fetching all ads:", error);
    return [];
  }
};

/**
 * ✅ Fetch a single ad by ID
 */
export const fetchAd = async (id: string): Promise<adData | null> => {
  try {
    const docRef = doc(db, "ads", id);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? mapDocToAdData(docSnap) : null;
  } catch (error) {
    console.error("Error fetching ad:", error);
    return null;
  }
};

/**
 * ✅ Fetch ads by category
 */
export const fetchAdsByCategory = async (category: string): Promise<adData[]> => {
  try {
    const categoryLower = category.toLowerCase();
    const q = query(
      collection(db, "ads"),
      where("categoryLower", "==", categoryLower)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(mapDocToAdData);
  } catch (error) {
    console.error(`Error fetching ads for category ${category}:`, error);
    return [];
  }
};

/**
 * ✅ Search ads by title (case-insensitive match)
 */
export const searchAdsByTitle = async (title: string): Promise<adData[]> => {
  try {
    const titleLower = title.toLowerCase();
    const q = query(
      collection(db, "ads"),
      where("titleLower", ">=", titleLower),
      where("titleLower", "<=", titleLower + "\uf8ff")
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(mapDocToAdData);
  } catch (error) {
    console.error(`Error searching ads with title ${title}:`, error);
    return [];
  }
};

/**
 * ✅ Fetch ads by user email
 */
export const fetchUserAds = async (email: string): Promise<adData[]> => {
  try {
    const q = query(
      collection(db, "ads"),
      where("userEmail", "==", email),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(mapDocToAdData);
  } catch (error) {
    console.error(`Error fetching ads for user ${email}:`, error);
    return [];
  }
};