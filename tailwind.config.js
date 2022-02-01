module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
       "bookmark-purple":"#0d237d",
       "bookmark-red":"#FA5959",
       "bookmark-blue":"#78b844",
       "bookmark-grey":"#9194A2",
       "bookmark-white":"#f7f7f7"
      }
    },
    fontFamily:{
      Poppins:["poppins, sans-serif"],
      Roboto:['Roboto, sans-serif']
    },
    container: {
      center: true,
      padding: "2rem",
      screens : {
      lg: "1124px",
      xl: "1124px",
      "2xl": "1124px",  
      }

    },
  },
  plugins: [],
}
