const portkvarteren = [
  {
    src: '../assets/Images/Work/Portkvarteren/Portkvarteren01.jpg',
    opts : {
      caption : 'Portkvarteren',
      thumb   : '../assets/Images/Work/Portkvarteren/Portkvarteren01.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/Portkvarteren/Portkvarteren02.jpg',
    opts : {
      caption : 'Portkvarteren',
      thumb   : '../assets/Images/Work/Portkvarteren/Portkvarteren02.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/Portkvarteren/Portkvarteren03.jpg',
    opts : {
      caption : 'Portkvarteren',
      thumb   : '../assets/Images/Work/Portkvarteren/Portkvarteren03.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/Portkvarteren/Portkvarteren04.jpg',
    opts : {
      caption : 'Portkvarteren',
      thumb   : '../assets/Images/Work/Portkvarteren/Portkvarteren04.jpg'
    },
    type: "image"
  },
]

$("#portkvarteren").on('click', function() {
  Fancybox.show(portkvarteren, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
});
