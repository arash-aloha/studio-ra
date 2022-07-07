const vasjon = [
  {
    src: '../assets/Images/Work/Vasjon/Vasjon01.jpg',
    opts : {
      caption : 'Växsjö competition',
      thumb   : 'assets/Images/Work/Vasjon/Vasjon01_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Vasjon/Vasjon02.jpg',
    opts : {
      caption : 'Växsjö competition',
      thumb   : '../assets/Images/Work/Vasjon/Vasjon02_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Vasjon/Vasjon03.jpg',
    opts : {
      caption : 'Växsjö competition',
      thumb   : '../assets/Images/Work/Vasjon/Vasjon03_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Vasjon/Vasjon04.jpg',
    opts : {
      caption : 'Växsjö competition',
      thumb   : '../assets/Images/Work/Vasjon/Vasjon04_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Vasjon/Vasjon05.jpg',
    opts : {
      caption : 'Växsjö competition',
      thumb   : '../assets/Images/Work/Vasjon/Vasjon05_thumb.jpg'
    },
    type: "image"
  },
]

$(".vasjon").on('click', function() {
  Fancybox.show(vasjon, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    },
    mainClass: "vasjon",
  });

});