"use client";

import { useEffect, useState } from "react";
import { fetchAd } from "@/lib/fetchData";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function AdDetailPage() {
  const { id } = useParams(); // ✅ Matches folder name
  const [ad, setAd] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchAd(id as string).then((data) => {
      setAd(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!ad) return <p className="text-center py-10">Ad not found.</p>;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">{ad.title}</h1>
      <Image
        src={ad.images?.[0] || "/fallback-image.png"}
        alt={ad.title}
        width={800}
        height={500}
        className="object-cover rounded-lg"
      />
      <p className="mt-4">{ad.description}</p>
      <p className="mt-4 font-bold text-green-600">₦{ad.price}</p>
      <p className="mt-2 text-gray-600">{ad.location}</p>

      {/* ✅ Buy Now Button */}
      <div className="mt-6">
        <Link
          href={`/checkout?title=${encodeURIComponent(ad.title)}&price=${ad.price}&id=${ad.id}`}
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
