const table = [
  {
    src: '../assets/Images/Work/Table/Table01.jpg',
    opts : {
      caption : 'Table',
      thumb   : '../assets/Images/Work/Table/Table01_thumb.jpg'
    },
    type: "image"
  }
]

$(".table").on('click', function() {
  Fancybox.show(table, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
});
