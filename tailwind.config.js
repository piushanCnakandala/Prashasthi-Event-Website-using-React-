import EventCardOfEntertainment from "./src/commponents/common/eventCards/entertainment";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',

  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern':"url('assets/img/cover2.jpg')",
        'hero-pattern2':"url('assets/img/car_04.jpg')",
        'event-wedding':"url('assets/img/wedding.jpg')",
        'event-engagements':"url('assets/img/engagements.jpg')",
        'event-entertainment':"url('assets/img/entertainment.jpg')",
        'event-birthday':"url('assets/img/birthday.jpg')",

      /*  'loginAdmin-img': "url('assets/img/cover/car_02.jpg')",
        'loginDriver-img': "url('assets/img/cover/car_03.jpg')"*/
      },
      fontFamily:{
        'dosis':"'Dosis',sans-serif,arial,Helvetica",
        'roboto':"'Roboto condensed', sans-serif",
      },
    },
  },
  plugins: [],
}

