"use client";

import { adData } from "@/lib/types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

// Cloudinary fallback image
const FALLBACK_IMAGE = "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v123456789/no-image.png";

export default function Ads({ ad }: { ad: adData }) {
  if (!ad) {
    return <p className="text-center mt-10 text-gray-400">Ad not found</p>;
  }

  return (
    <div className="lg:flex m-10 lg:space-x-5">
      {/* Ad details */}
      <div className="lg:flex-1 border-t-8 border-green-600 bg-white pb-10">
        <Image
          src={ad.images?.[0] || FALLBACK_IMAGE}
          alt={ad.title || "No title"}
          width={800}
          height={500}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="m-5">
          <p className="text-2xl font-bold">{ad.title}</p>

          {ad.negotiable && <span className="text-green-600">Negotiable</span>}

          <p className="my-5 text-gray-400 flex items-center">
            <LocationOnIcon fontSize="small" className="mr-1" />
            {ad.location} - {ad.contactNumber}
          </p>

          {ad.youtube && (
            <a
              href={ad.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 flex items-center space-x-1 mb-5"
            >
              <YouTubeIcon fontSize="small" />
              <span>Watch on YouTube</span>
            </a>
          )}

          <div className="divider"></div>
          <p className="my-5">{ad.description}</p>
          <div className="divider"></div>

          {/* More Images */}
          <div className="flex flex-wrap gap-2 mt-5">
            {ad.images?.length
              ? ad.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${ad.title} - ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] object-cover border"
                  />
                ))
              : (
                <Image
                  src={FALLBACK_IMAGE}
                  alt="No additional images"
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] object-cover border"
                />
              )}
          </div>
        </div>
      </div>

      {/* Safety tips */}
      <div className="lg:w-[30%] hidden lg:inline">
        <div className="bg-white p-5 text-sm rounded shadow">
          <div className="font-bold text-center mb-2">Safety tips</div>
          <ol className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Don't pay in advance, including for delivery</li>
            <li>Inspect the item before purchase</li>
            <li>Verify the item matches the ad</li>
            <li>Only pay when satisfied</li>
          </ol>
        </div>
      </div>
    </div>
  );
}