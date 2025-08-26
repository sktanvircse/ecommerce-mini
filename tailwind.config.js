/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",        // your app folder
        "./components/**/*.{js,ts,jsx,tsx}", // your components folder
        "./pages/**/*.{js,ts,jsx,tsx}",      // if you have pages folder
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
