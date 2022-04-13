module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primario': '#040F0F',
        'secundario': '#03256C',
        'terciario': '#2541B2',
        'cuarto' : '#1768AC'
      },
      backgroundImage:{
        'header' : 'url("./src/assets/wallpaper.png")',
        'services' : 'url("./src/assets/services.svg")',
        'portfolio' : 'url("./src/assets/portafolio.png")',
        'main' : 'url("./src/assets/main.jpg")',
      }
    },
  },
  plugins: [],
}
