const moduleHousing = [
  {
    src: '../assets/Images/Home/ModuleHousing01_thumb.webp',
    caption : 'Module Housing',
    thumb   : '../assets/Images/Home/ModuleHousing01_thumb.webp',
    type: "image",
    preload: true
  }
]

$(".moduleHousing").on('click', function() {
  Fancybox.show(moduleHousing, {
    // Your options go here
    loop : true,
  });

});