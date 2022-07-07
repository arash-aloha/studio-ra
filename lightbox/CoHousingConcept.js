const cohousingConcept = [
  {
    src: '../assets/Images/Work/Co-housing-Concept/CoHousing01_thumb.jpg',
    opts : {
      caption : 'Co-housing concept',
      thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing01_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing02.jpeg',
    opts : {
      caption : 'Co-housing concept',
      thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing02_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing03.jpg',
    opts : {
      caption : 'Co-housing concept',
      thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing03.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing04.jpg',
    opts : {
      caption : 'Co-housing concept',
      thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing04.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing05.jpg',
    opts : {
      caption : 'Co-housing concept',
      thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing05_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing06.jpg',
    opts : {
      caption : 'Co-housing concept',
      thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing06_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing07.jpg',
    opts : {
      caption : 'Co-housing concept',
      thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing07_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Co-housing-Concept/CoHousing08_thumb.jpg',
    opts : {
      caption : 'Co-housing concept',
      thumb   : '../assets/Images/Work/Co-housing-Concept/CoHousing08.png'
    },
    type: "image"
  }
]

$(".cohousingConcept").on('click', function() {
  Fancybox.show(cohousingConcept, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    },
    mainClass: "cohousingConcept"
  });

});