const folkungavallen = [
  {
    src: '../assets/Images/Work/FolkungavallenLinkoping/linkoping_gatuperspektiv.jpg',
    caption : 'Folkungavallen Linköping',
    thumb   : '../assets/Images/Work/FolkungavallenLinkoping/linkoping_gatuperspektiv_thumb.jpg',
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