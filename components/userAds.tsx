"use client";

import { NGnaira } from "@/lib/help";
import { adData } from "@/lib/types";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { deleteDocById } from "@/lib/deleteData";
import { useRouter } from "next/navigation";

export default function UserAds({ data }: { data: adData }) {
  const router = useRouter();
  const ad = data;

  const deleteAd = async () => {
    const result = await deleteDocById(ad.id);

    if (result.error) {
      alert("Error deleting Ad");
    } else {
      alert(result.message);
      router.refresh();
    }
  };

  return (
    <div className="flex border border-gray-400 m-4 rounded-lg bg-white hover:scale-105 transition hover:cursor-pointer hover:shadow-lg">
      {/* Image Section */}
      <Link href={`/adverts/${ad.id}`} className="w-[25%]">
        <img
          src={ad.images?.[0] || "/fallback-image.png"}
          alt={ad.title}
          className="w-full h-full rounded-l-lg object-cover"
        />
      </Link>

      {/* Details Section */}
      <div className="flex-1 p-2">
        <Link
          href={`/adverts/${ad.id}`}
          className="font-bold line-clamp-2 hover:underline"
        >
          {ad.title}
        </Link>
        <p className="font-bold text-green-600">
          {NGnaira.format(ad.price)}
          {ad.negotiable?.toLowerCase() === "yes" && (
            <span>, Negotiable</span>
          )}
        </p>

        <small className="block text-gray-500">Open</small>

        <div className="my-2 flex items-center gap-2">
          <span className="bg-[#ebf2f7] text-[10px] p-2 rounded">
            {Math.floor(Math.random() * 100)} views
          </span>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            size="small"
            onClick={deleteAd}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}