/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}","./form/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily : {
        "Lilita" : ["Lilita One"],
        "Press-Start": ['Press Start 2P'],
        "VT323" : ['VT323'],
      }
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}

