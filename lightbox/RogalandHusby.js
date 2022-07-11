const rogalandHusby = [
  {
    src: '../assets/Images/Work/RogalandHusby/Rogaland01.jpg',
    caption : 'Rogaland Husby',
    thumb   : '../assets/Images/Work/RogalandHusby/Rogaland01_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/RogalandHusby/Rogaland02.jpg',
    caption : 'Rogaland Husby',
    thumb   : '../assets/Images/Work/RogalandHusby/Rogaland02_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/RogalandHusby/Rogaland03.jpg',
    caption : 'Rogaland Husby',
    thumb   : '../assets/Images/Work/RogalandHusby/Rogaland03_thumb.jpg',
    type: "image",
    preload: true
  },
]

$(".rogalandHusby").on('click', function() {
  Fancybox.show(rogalandHusby, {
    // Your options go here
    loop : true,
  });
});