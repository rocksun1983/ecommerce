"use client";

import { PaystackButton } from "react-paystack";
import { useState } from "react";

export default function PaystackPayment({ email, amount }: { email: string; amount: number }) {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!;
  const [reference, setReference] = useState(`ref-${Date.now()}`);

  const componentProps = {
    email,
    amount: amount * 100, // Paystack expects amount in kobo
    currency: "NGN",
    reference,
    publicKey,
    text: "Pay Now",
    onSuccess: (response: any) => {
      console.log("Payment Success:", response);
      alert("Payment successful!");
      // You can verify payment here
    },
    onClose: () => alert("Payment window closed"),
  };

  return (
    <div>
      <PaystackButton
        {...componentProps}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      />
    </div>
  );
}