const cohousingConcept = [
  {
    src: '../assets/Images/Work/Co-housing-Concept/CoHousing01_thumb.jpg',
    caption : 'Co-housing concept',
    thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing01_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing02.jpeg',
    caption : 'Co-housing concept',
    thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing02_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing03.jpg',
    caption : 'Co-housing concept',
    thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing03.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing04.jpg',
    caption : 'Co-housing concept',
    thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing04.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing05.jpg',
    caption : 'Co-housing concept',
    thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing05_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing06.jpg',
    caption : 'Co-housing concept',
    thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing06_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing07.jpg',
    caption : 'Co-housing concept',
    thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing07_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing08_thumb.jpg',
    caption : 'Co-housing concept',
    thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing08.png',
    type: "image",
    preload: true
  }
]

$(".cohousingConcept").on('click', function() {
  Fancybox.show(cohousingConcept, {
    // Your options go here
    loop : true,
  });

});