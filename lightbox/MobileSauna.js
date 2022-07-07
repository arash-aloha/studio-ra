const mobileSauna = [
  {
    src: '../assets/Images/Work/MobileSauna/mobilesauna1.jpg',
    opts : {
      caption : 'Mobile Sauna',
      thumb   : '../assets/Images/Work/MobileSauna/mobilesauna1_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/MobileSauna/mobilesauna2.jpg',
    opts : {
      caption : 'Mobile Sauna',
      thumb   : '../assets/Images/Work/MobileSauna/mobilesauna2_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/MobileSauna/mobilesauna3.png',
    opts : {
      caption : 'Mobile Sauna',
      thumb   : '../assets/Images/Work/MobileSauna/mobilesauna3_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/MobileSauna/mobilesauna4.jpeg',
    opts : {
      caption : 'Mobile Sauna',
      thumb   : '../assets/Images/Work/MobileSauna/mobilesauna4_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/MobileSauna/mobilesauna5.jpeg',
    opts : {
      caption : 'Mobile Sauna',
      thumb   : '../assets/Images/Work/MobileSauna/mobilesauna5_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/MobileSauna/mobilesauna6.jpg',
    opts : {
      caption : 'Mobile Sauna',
      thumb   : '../assets/Images/Work/MobileSauna/mobilesauna6_thumb.jpg'
    },
    type: "image"
  },
]

$("#mobileSauna").on('click', function() {
  Fancybox.show(mobileSauna, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});