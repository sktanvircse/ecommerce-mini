"use client";

import { useRouter } from "next/navigation";

export default function OrderDonePage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center p-6">
            <h1 className="text-3xl font-bold text-green-600 mb-4">
                🎉 Order Placed Successfully!
            </h1>
            <p className="text-gray-600 mb-6">
                Thank you for your purchase. Your order will be delivered soon.
            </p>
            <button
                onClick={() => router.push("/")}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
                Back to Home
            </button>
        </div>
    );
}
