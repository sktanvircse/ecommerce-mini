// app/products/page.tsx
"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";


export default function ProductsPage() {

    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}
