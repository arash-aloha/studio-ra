const sockerstaden = [
  {
    src: '../assets/Images/Work/Sockerstaden',
    opts : {
      caption : 'Sockerstaden',
      thumb   : '../assets/Images/Work/Sockerstaden'
    },
    type: "image"
  }
]

$("#sockerstaden").on('click', function() {
  Fancybox.show(sockerstaden, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});