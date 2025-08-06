"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const params = useSearchParams();
  const ref = params.get("ref");

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded shadow text-center">
      <h2 className="text-2xl font-bold text-green-600">Payment Successful ✅</h2>
      <p className="mt-3">Reference: {ref}</p>
      <a
        href="/"
        className="mt-5 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Back to Home
      </a>
    </div>
  );
}