export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dev-bg': '#050608',
        'dev-card': '#12131A',
        'dev-primary': '#D6FF60',
        'dev-text': '#F5F5F5',
      },
      boxShadow: {
        'dev-glow': '0 0 60px rgba(214, 255, 96, 0.5)',
      },
    },
  },
  plugins: [],
};
