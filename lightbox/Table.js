const table = [
  {
    src: '../assets/Images/Work/Table/Table01.jpg',
    caption : 'Table',
    thumb   : '../assets/Images/Work/Table/Table01_thumb.jpg',
    type: "image",
    preload: true
  }
]

$(".table").on('click', function() {
  Fancybox.show(table, {
    // Your options go here
    loop : true,
  });
});
