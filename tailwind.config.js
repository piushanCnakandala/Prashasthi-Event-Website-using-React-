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
        'hero-pattern':"url('assets/img/cover.jpg')",
        'hero-pattern2':"url('assets/img/car_04.jpg')",
        'event-wedding':"url('assets/img/wedding1.jpg')",
        'event-engagements':"url('assets/img/engagements1 .jpg')",
        'event-engagements2':"url('assets/img/engagements2.jpg')",
        'event-engagements3':"url('assets/img/engagements3.jpg')",
        'event-entertainment':"url('assets/img/wayo.jpg')",
        'event-entertainment2':"url('assets/img/entertainment2.jpg')",
        'event-entertainment3':"url('assets/img/entertainment3.jpg')",
        'event-birthday':"url('assets/img/birthday.jpg')",
        'event-corporate':"url('assets/img/coporate2.jpg')",
        'event-corporate1':"url('assets/img/coporate4.jpg')",
        'event-weddingsImg':"url('assets/img/weddingsImg.jpg')",
        'event-weddingsVideo':"url('assets/img/weddingsVideo.jpg')",
        'event-upcomingEvent':"url('assets/img/upcoming.jpg')",
        'event-woodenporu':"url('assets/img/wooden poru.jpeg')",
        'event-WeddingInspiration':"url('assets/img/WeddingInspiration.jpeg')",
        'event-poru01':"url('assets/img/poru/p01.jpg')",
        'event-poru02':"url('assets/img/poru/p02.jpg')",
        'event-poru03':"url('assets/img/poru/p03.jpg')",
        'event-poru04':"url('assets/img/poru/p04.jpg')",
        'event-poru05':"url('assets/img/poru/p05.jpg')",
        'event-poru06':"url('assets/img/poru/p06.jpg')",
        'event-poru07':"url('assets/img/poru/p07.jpg')",
        'event-poru08':"url('assets/img/poru/p08.jpg')",
        'event-poru09':"url('assets/img/poru/p09.jpg')",
        'event-poru10':"url('assets/img/poru/p10.jpg')",
        'event-w01':"url('assets/img/wedding/w01.jpg')",
        'event-poru11':"url('assets/img/poru/p11.jpg')",
        'event-w02':"url('assets/img/wedding/w02.jpg')",
        'event-w03':"url('assets/img/wedding/w03.jpg')",
        'event-w04':"url('assets/img/wedding/w04.jpg')",
        'event-w05':"url('assets/img/wedding/w05.jpg')",
        'event-w06':"url('assets/img/wedding/w06.jpg')",
        'event-w07':"url('assets/img/wedding/w07.jpg')",
        'event-w08':"url('assets/img/wedding/w08.jpg')",
        'event-w09':"url('assets/img/wedding/w09.jpg')",
        'event-w10':"url('assets/img/wedding/w10.jpg')",
        'event-w011':"url('assets/img/wedding/w011.jpg')",
        'event-w012':"url('assets/img/wedding/w012.jpg')",
        'event-w013':"url('assets/img/wedding/w013.jpg')",
        'event-w14':"url('assets/img/wedding/w14.jpg')",



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

