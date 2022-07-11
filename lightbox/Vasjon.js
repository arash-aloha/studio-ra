const vasjon = [
  {
    src: '../assets/Images/Work/Vasjon/Vasjon01.jpg',
    caption : 'Växsjö competition',
    thumb   : '../assets/Images/Work/Vasjon/Vasjon01_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Vasjon/Vasjon02.jpg',
    caption : 'Växsjö competition',
    thumb   : '../assets/Images/Work/Vasjon/Vasjon02_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Vasjon/Vasjon03.jpg',
    caption : 'Växsjö competition',
    thumb   : '../assets/Images/Work/Vasjon/Vasjon03_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Vasjon/Vasjon04.jpg',
    caption : 'Växsjö competition',
    thumb   : '../assets/Images/Work/Vasjon/Vasjon04_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Vasjon/Vasjon05.jpg',
    caption : 'Växsjö competition',
    thumb   : '../assets/Images/Work/Vasjon/Vasjon05_thumb.jpg',
    type: "image",
    preload: true
  },
]

$(".vasjon").on('click', function() {
  Fancybox.show(vasjon, {
    // Your options go here
    loop : true,
  });

});