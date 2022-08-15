const sockerstaden = [
  {
    src: '../assets/Images/Work/Sockerstaden',
    caption : 'Sockerstaden',
    thumb   : '../assets/Images/Work/Sockerstaden',
    type: "image",
    preload: true
  }
]

$(".sockerstaden").on('click', function() {
  Fancybox.show(sockerstaden, {
    // Your options go here
    loop : true,
  });

});