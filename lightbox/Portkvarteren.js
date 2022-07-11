const portkvarteren = [
  {
    src: '../assets/Images/Work/Portkvarteren/Portkvarteren01.jpg',
    caption : 'Portkvarteren',
    thumb   : '../assets/Images/Work/Portkvarteren/Portkvarteren01.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/Portkvarteren/Portkvarteren02.jpg',
    caption : 'Portkvarteren',
    thumb   : '../assets/Images/Work/Portkvarteren/Portkvarteren02.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/Portkvarteren/Portkvarteren03.jpg',
    caption : 'Portkvarteren',
    thumb   : '../assets/Images/Work/Portkvarteren/Portkvarteren03.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/Portkvarteren/Portkvarteren04.jpg',
    caption : 'Portkvarteren',
    thumb   : '../assets/Images/Work/Portkvarteren/Portkvarteren04.jpg',
    type: "image",
    preload: true
  },
]

$(".portkvarteren").on('click', function() {
  Fancybox.show(portkvarteren, {
    // Your options go here
    loop : true,
  });
});
