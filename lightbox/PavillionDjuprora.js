const pavillionDjuprora = [
  {
    src: '../assets/Images/Work/PavillionDjuprora/Djuprora01.jpeg',
    opts : {
      caption : 'Pavillion Djupröra',
      thumb   : '../assets/Images/Work/PavillionDjuprora/Djuprora01_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/PavillionDjuprora/Djuprora02.jpeg',
    opts : {
      caption : 'Pavillion Djupröra',
      thumb   : '../assets/Images/Work/PavillionDjuprora/Djuprora02_thumb.jpg'
    },
    type: "image"
  }
]

$(".pavillionDjuprora").on('click', function() {
  Fancybox.show(pavillionDjuprora, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
});