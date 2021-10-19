module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            mor: '#672f8c',
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            '50%': '50%',
            170: '170%',
        },
        extend: {
            backgroundImage: {
                ata: "url('/ata.jpg')",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
