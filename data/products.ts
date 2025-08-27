export interface Product {
    id: number;
    name: string;
    price: number;
    image: string; // URL or local path
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Smartphone",
        price: 499,
        image: "/images/product1.jpg",
        description: "A high-quality smartphone.",
    },
    {
        id: 2,
        name: "Headphones",
        price: 99,
        image: "/images/product2.jpg",
        description: "Noise-cancelling headphones.",
    },
    {
        id: 3,
        name: "Smartwatch",
        price: 199,
        image: "/images/product3.jpg",
        description: "Keep track of your health and notifications.",
    },
];
