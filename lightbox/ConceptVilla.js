const conceptVilla = [
  {
    src: '../assets/Images/Work/Conceptforavilla/VillaConcept01.jpg',
    opts : {
      caption : 'Concept for a villa',
      thumb   : '../assets/Images/Work/Conceptforavilla/VillaConcept01_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Conceptforavilla/VillaConcept02.jpg',
    opts : {
      caption : 'Concept for a villa',
      thumb   : '../assets/Images/Work/Conceptforavilla/VillaConcept02_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Conceptforavilla/VillaConcept03.jpg',
    opts : {
      caption : 'Concept for a villa',
      thumb   : '../assets/Images/Work/Conceptforavilla/VillaConcept03_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Conceptforavilla/VillaConcept04.jpg',
    opts : {
      caption : 'Concept for a villa',
      thumb   : '../assets/Images/Work/Conceptforavilla/VillaConcept04_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Conceptforavilla/VillaConcept05.jpg',
    opts : {
      caption : 'Concept for a villa',
      thumb   : '../assets/Images/Work/Conceptforavilla/VillaConcept05_thumb.jpg'
    },
    type: "image"
  }
]

$(".conceptVilla").on('click', function() {
  Fancybox.show(conceptVilla, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    },
    helpers : { 
      overlay: {
       opacity: 0.8, // or the opacity you want 
       css: {'background-color': '#fff'}
      }
    }
  });

});