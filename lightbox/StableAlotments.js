const stableAlotments = [
  {
    src: '../assets/Images/Work/StableAlotments/StableAlotments01.jpg',
    opts : {
      caption : 'Stable Alotments',
      thumb   : '../assets/Images/Work/StableAlotments/StableAlotments01_thumb.jpg'
    },
    type: "image"
  }
]

$(".stableAlotments").on('click', function() {
  Fancybox.show(stableAlotments, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
});
