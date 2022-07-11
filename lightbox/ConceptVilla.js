const conceptVilla = [
  {
    src: '../assets/Images/Work/Conceptforavilla/VillaConcept01.jpg',
    caption : 'Concept for a villa',
    thumb   : '../assets/Images/Work/Conceptforavilla/VillaConcept01_thumb.jpg',
    type: "image",
    preload: true,
  },
  {
    src  : '../assets/Images/Work/Conceptforavilla/VillaConcept02.jpg',
    caption : 'Concept for a villa',
    thumb   : '../assets/Images/Work/Conceptforavilla/VillaConcept02_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Conceptforavilla/VillaConcept03.jpg',
    caption : 'Concept for a villa',
    thumb   : '../assets/Images/Work/Conceptforavilla/VillaConcept03_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Conceptforavilla/VillaConcept04.jpg',
    caption : 'Concept for a villa',
    thumb   : '../assets/Images/Work/Conceptforavilla/VillaConcept04_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Conceptforavilla/VillaConcept05.jpg',
    caption : 'Concept for a villa',
    thumb   : '../assets/Images/Work/Conceptforavilla/VillaConcept05_thumb.jpg',
    type: "image",
    preload: true
  }
]

$(".conceptVilla").on('click', function() {
  Fancybox.show(conceptVilla, {
    // Your options go here
    loop : true,
  });
});

