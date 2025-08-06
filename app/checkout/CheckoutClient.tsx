"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutClient({ userEmail }: { userEmail: string }) {
  const params = useSearchParams();
  const title = params.get("title");
  const price = params.get("price");
  const id = params.get("id");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePay = () => {
    const handler = (window as any).PaystackPop.setup({
      key: "pk_test_33a3cd12ed834b5f76fe28c21ec167896f160764", // Replace with your Paystack public key
      email: userEmail || "guest@example.com", // ✅ Logged-in user's email
      amount: Number(price) * 100,
      currency: "NGN",
      ref: `${Date.now()}`,
      callback: function (response: any) {
        window.location.href = `/success?ref=${response.reference}`;
      },
      onClose: function () {
        alert("Payment window closed.");
      },
    });
    handler.openIframe();
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded shadow">
      <h2 className="text-2xl font-bold mb-5">Checkout</h2>
      <p><strong>Item:</strong> {title}</p>
      <p><strong>Price:</strong> ₦{price}</p>
      <button
        onClick={handlePay}
        className="mt-5 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Pay with Paystack
      </button>
    </div>
  );
}