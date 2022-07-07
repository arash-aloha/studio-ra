const lamp = [
  {
    src: '../assets/Images/Work/Lamp/10Lamp1.jpg',
    opts : {
      caption : 'Lamp',
      thumb   : '../assets/Images/Work/Lamp/10Lamp1_thumb.jpg'
    },
    type: "image"
  }
]

$(".lamp").on('click', function() {
  Fancybox.show(lamp, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});