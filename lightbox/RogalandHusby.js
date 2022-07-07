const rogalandHusby = [
  {
    src: '../assets/Images/Work/RogalandHusby/Rogaland01.jpg',
    opts : {
      caption : 'Rogaland Husby',
      thumb   : '../assets/Images/Work/RogalandHusby/Rogaland01_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/RogalandHusby/Rogaland02.jpg',
    opts : {
      caption : 'Rogaland Husby',
      thumb   : '../assets/Images/Work/RogalandHusby/Rogaland02_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/RogalandHusby/Rogaland03.jpg',
    opts : {
      caption : 'Rogaland Husby',
      thumb   : '../assets/Images/Work/RogalandHusby/Rogaland03_thumb.jpg'
    },
    type: "image"
  },
]

$(".rogalandHusby").on('click', function() {
  Fancybox.show(rogalandHusby, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
});