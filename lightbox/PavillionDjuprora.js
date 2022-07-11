const pavillionDjuprora = [
  {
    src: '../assets/Images/Work/PavillionDjuprora/Djuprora01.jpeg',
    caption : 'Pavillion Djupröra',
    thumb   : '../assets/Images/Work/PavillionDjuprora/Djuprora01_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/PavillionDjuprora/Djuprora02.jpeg',
    caption : 'Pavillion Djupröra',
    thumb   : '../assets/Images/Work/PavillionDjuprora/Djuprora02_thumb.jpg',
    type: "image",
    preload: true
  }
]

$(".pavillionDjuprora").on('click', function() {
  Fancybox.show(pavillionDjuprora, {
    // Your options go here
    loop : true,
  });
});