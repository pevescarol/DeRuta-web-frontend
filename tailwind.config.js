/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero':"url('/forest-bg-l.png')",
        'blog-item': "url('/blog-item-unsplash.jpg')",
        'blog-item-2': "url('/blog-item-unsplash2.jpg')",
      },
    },
  },
  plugins: [],
}
