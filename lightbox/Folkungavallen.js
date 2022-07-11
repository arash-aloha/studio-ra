const folkungavallen = [
  {
    src: '../assets/Images/Work/FolkungavallenLinköping/linköping_gatuperspektiv.jpg',
    caption : 'Folkungavallen Linköping',
    thumb   : '../assets/Images/Work/FolkungavallenLinköping/linköping_gatuperspektiv_thumb.jpg',
    type: "image",
    preload: true
  },
]

$(".folkungavallen").on('click', function() {
  Fancybox.show(folkungavallen, {
    // Your options go here
    loop : true,
  });

});