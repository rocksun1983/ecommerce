"use client";

import { useEffect, useState } from "react";
import { fetchAllAds } from "@/lib/fetchData";
import Link from "next/link";
import Image from "next/image";
import { adData } from "@/lib/types";

const FALLBACK_IMAGE = "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v123456789/no-image.png";

export default function AllAds() {
  const [ads, setAds] = useState<adData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAds = async () => {
      try {
        const result = await fetchAllAds();
        setAds(result);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch ads.");
      } finally {
        setLoading(false);
      }
    };
    getAds();
  }, []);

  if (loading) return <p className="text-center py-10 text-gray-500">Loading ads...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (ads.length === 0) return <p className="text-center py-10 text-gray-500">No ads available.</p>;

  return (
    <div className="max-w-6xl mx-auto py-5">
      <h2 className="text-2xl font-bold text-center mb-5">Advertised Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ads.map((ad) => (
          <Link
            href={`/adverts/${ad.id}`}
            key={ad.id}
            className="border rounded shadow p-3 hover:shadow-lg transition"
          >
            <Image
              src={ad.images?.[0] || FALLBACK_IMAGE}
              alt={ad.title}
              width={300}
              height={200}
              className="object-cover rounded-lg"
            />
            <h3 className="font-semibold mt-2 text-lg truncate">{ad.title}</h3>
            <p className="text-sm text-gray-500 truncate">{ad.description}</p>
            <p className="text-green-600 font-bold mt-1">₦{ad.price}</p>
            <p className="text-xs text-gray-400">{ad.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}