import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 font-bold text-lg">{product.name}</h3>
      <p className="text-gray-700 mt-1">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}
