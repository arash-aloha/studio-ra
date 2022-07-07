const folkungavallen = [
  {
    src: '../assets/Images/Work/FolkungavallenLinköping/linköping_gatuperspektiv.jpg',
    opts : {
      caption : 'Folkungavallen Linköping',
      thumb   : '../assets/Images/Work/FolkungavallenLinköping/linköping_gatuperspektiv_thumb.jpg'
    },
    type: "image"
  },
]

$("#folkungavallen").on('click', function() {
  Fancybox.show(folkungavallen, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});