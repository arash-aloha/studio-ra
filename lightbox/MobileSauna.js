const mobileSauna = [
  {
    src: '../assets/Images/Work/MobileSauna/mobilesauna1.jpg',
    caption : 'Mobile Sauna',
    thumb   : '../assets/Images/Work/MobileSauna/mobilesauna1_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/MobileSauna/mobilesauna2.jpg',
    caption : 'Mobile Sauna',
    thumb   : '../assets/Images/Work/MobileSauna/mobilesauna2_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/MobileSauna/mobilesauna3.png',
    caption : 'Mobile Sauna',
    thumb   : '../assets/Images/Work/MobileSauna/mobilesauna3_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/MobileSauna/mobilesauna4.jpeg',
    caption : 'Mobile Sauna',
    thumb   : '../assets/Images/Work/MobileSauna/mobilesauna4_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/MobileSauna/mobilesauna5.jpeg',
    caption : 'Mobile Sauna',
    thumb   : '../assets/Images/Work/MobileSauna/mobilesauna5_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/MobileSauna/mobilesauna6.jpg',
    caption : 'Mobile Sauna',
    thumb   : '../assets/Images/Work/MobileSauna/mobilesauna6_thumb.jpg',
    type: "image",
    preload: true
  },
]

$(".mobileSauna").on('click', function() {
  Fancybox.show(mobileSauna, {
    // Your options go here
    loop : true,
  });

});