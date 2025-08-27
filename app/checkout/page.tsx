"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart, clearCart } from "@/store/cartSlice";
import { useRouter } from "next/navigation";
import { addOrder } from "@/store/orderSlice";

export default function CheckoutPage() {
    const { items } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const router = useRouter();

    const subtotal = items.reduce((acc: any, item: any) => acc + item.price, 0);
    const deliveryFee = items.length > 0 ? 5 : 0;
    const total = subtotal + deliveryFee;

    const handlePlaceOrder = () => {
        if (items.length === 0) {
            alert("Cart is empty!");
            return;
        }

        const newOrder = {
            id: Date.now().toString(),
            items,
            total,
            date: new Date().toLocaleString(),
        };

        dispatch(addOrder(newOrder)); // ✅ Save order
        dispatch(clearCart());
        router.push("/order-done");
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>

            {items.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {items.map((item: any) => (
                            <li
                                key={item.id}
                                className="flex items-center justify-between border p-3 rounded-lg"
                            >
                                <div>
                                    <h2 className="font-semibold">{item.name}</h2>
                                    <p className="text-gray-500">${item.price}</p>
                                </div>
                                <button
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className="text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Summary */}
                    <div className="mt-6 border-t pt-4">
                        <p className="flex justify-between">
                            <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
                        </p>
                        <p className="flex justify-between">
                            <span>Delivery Fee:</span> <span>${deliveryFee.toFixed(2)}</span>
                        </p>
                        <p className="flex justify-between font-bold text-lg">
                            <span>Total:</span> <span>${total.toFixed(2)}</span>
                        </p>
                    </div>

                    {/* Place Order */}
                    <button
                        onClick={handlePlaceOrder}
                        className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                    >
                        Place Order
                    </button>
                </>
            )}
        </div>
    );
}
