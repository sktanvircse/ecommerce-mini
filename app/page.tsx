// app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen animate-fadeIn">
      <h2 className="text-4xl font-bold text-red-600 mb-2">
        Welcome to E-Commerce Mini 🛒
      </h2>
      <h1 className="text-lg text-green-800 mb-6">
        Let’s start building your store!
      </h1>
      <a
        href="/products"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Shop Now
      </a>
    </main>
  );
}
