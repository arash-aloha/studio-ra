const autogyron = [
  {
    src: '../assets/Images/Work/Autogyron_Orebro/Autogyron01.jpg',
    caption : 'Kv Autogyron 3 Örebro',
    thumb   : '../assets/Images/Work/Autogyron_Orebro/Autogyron01_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Autogyron_Orebro/Autogyron02.jpg',
    caption : 'Kv Autogyron 3 Örebro',
    thumb   : '../assets/Images/Work/Autogyron_Orebro/Autogyron01_thumb.jpg',
    type: "image",
    preload: true
  },
]

$(".autogyron").on('click', function() {
  Fancybox.show(autogyron, {
    // Your options go here
    loop : true,
  });

});