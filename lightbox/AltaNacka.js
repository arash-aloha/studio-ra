const altaNacka = [
  {
    src: '../assets/Images/Work/Alta-Nacka/Alta01.webp',
    caption : 'Älta Nacka competition',
    thumb   : '../assets/Images/Work/Alta-Nacka/Alta01_thumb.webp',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/Alta-Nacka/Alta02.webp',
    caption : 'Älta Nacka competition',
    thumb   : '../assets/Images/Work/Alta-Nacka/Alta02_thumb.webp',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/Alta-Nacka/Alta03.webp',
    caption : 'Älta Nacka competition',
    thumb   : '../assets/Images/Work/Alta-Nacka/Alta03_thumb.webp',
    type: "image",
    preload: true
  },

]

$(".altaNacka").on('click', function() {
  Fancybox.show(altaNacka, {
    // Your options go here
    loop : true,
  });

});