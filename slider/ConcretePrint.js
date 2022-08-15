const concretePrint = [
  {
    src: '../assets/Images/Work/ConcretePrintedHousing/ConcretePrint1.jpg',
    caption : 'Concrete printed housing',
    thumb   : '../assets/Images/Work/ConcretePrintedHousing/ConcretePrint1_thumb.jpg',
    type: "image",
    preload: true
  }
]

$(".concretePrint").on('click', function() {
  Fancybox.show(concretePrint, {
    // Your options go here
    loop : true,
  });

});
