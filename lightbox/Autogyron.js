const autogyron = [
  {
    src: '../assets/Images/Work/Autogyron_Orebro/Autogyron01.jpg',
    opts : {
      caption : 'Kv Autogyron 3 Örebro',
      thumb   : '../assets/Images/Work/Autogyron_Orebro/Autogyron01_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Autogyron_Orebro/Autogyron02.jpg',
    opts : {
      caption : 'Kv Autogyron 3 Örebro',
      thumb   : '../assets/Images/Work/Autogyron_Orebro/Autogyron01_thumb.jpg'
    },
    type: "image"
  },
]

$("#autogyron").on('click', function() {
  Fancybox.show(autogyron, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    },
    mainClass: "autogyron",
  });

});