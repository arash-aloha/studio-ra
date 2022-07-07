const concretePrint = [
  {
    src: '../assets/Images/Work/ConcretePrintedHousing/ConcretePrint1.jpg',
    opts : {
      caption : 'Concrete printed housing',
      thumb   : '../assets/Images/Work/ConcretePrintedHousing/ConcretePrint1_thumb.jpg'
    },
    type: "image"
  }
]

$(".concretePrint").on('click', function() {
  Fancybox.show(concretePrint, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});
