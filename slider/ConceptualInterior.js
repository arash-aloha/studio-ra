const conceptualInterior = [
  {
    src: '../assets/Images/Home/ConceptualInterior01_thumb.webp',
    caption : 'Module Housing',
    thumb   : '../assets/Images/Home/ConceptualInterior01_thumb.webp',
    type: "image",
    preload: true
  }
]

$(".conceptualInterior").on('click', function() {
  Fancybox.show(conceptualInterior, {
    // Your options go here
    loop : true,
  });

});