/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/app.component.html",
    "./src/app/app.component.spec.ts",
    "./src/app/header/header.component.html",
    "./src/app/header/header.component.spec.ts",
    "./src/app/home/home.component.html",
    "./src/app/home/home.component.spec.ts",
    "./node_modules/flowbite/dist/flowbite.js",
    "./src/app/destinations/destinations.component.html",
    "./src/app/destinations/destinations.component.spec.ts",
    "./src/app/experience/experience.component.html",
    "./src/app/experience/experience.component.spec.ts",
    "./src/app/offers/offers.component.html",
    "./src/app/offers/offers.component.spec.ts",
    "./src/app/footer/footer.component.html",
    "./src/app/footer/footer.component.spec.ts",
    

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}




