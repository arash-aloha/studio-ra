const altaNacka = [
  {
    src: '../assets/Images/Work/Alta-Nacka/Alta01.jpg',
    opts : {
      caption : 'Älta Nacka competition',
      thumb   : '../assets/Images/Work/Alta-Nacka/Alta01_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/Alta-Nacka/Alta02.jpg',
    opts : {
      caption : 'Älta Nacka competition',
      thumb   : '../assets/Images/Work/Alta-Nacka/Alta02_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/Alta-Nacka/Alta03.jpg',
    opts : {
      caption : 'Älta Nacka competition',
      thumb   : '../assets/Images/Work/Alta-Nacka/Alta03_thumb.jpg'
    },
    type: "image"
  },

]

$(".altaNacka").on('click', function() {
  Fancybox.show(altaNacka, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});