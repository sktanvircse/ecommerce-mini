"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function OrdersPage() {
    const { orders } = useSelector((state: RootState) => state.order);

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">My Orders</h1>

            {orders.length === 0 ? (
                <p className="text-gray-500">No orders yet.</p>
            ) : (
                <div className="space-y-6">
                    {orders.map((order: any) => (
                        <div
                            key={order.id}
                            className="border p-4 rounded-lg shadow-sm bg-white"
                        >
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="font-semibold">Order #{order.id}</h2>
                                <span className="text-gray-500 text-sm">{order.date}</span>
                            </div>

                            <ul className="space-y-2">
                                {order.items.map((item: any) => (
                                    <li key={item.id} className="flex justify-between">
                                        <span>{item.name}</span>
                                        <span>${item.price}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-3 font-bold text-right">
                                Total: ${order.total.toFixed(2)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
