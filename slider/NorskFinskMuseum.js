const norskFinskMuseum = [
  {
    src: '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk01.jpg',
    caption : 'Norsk Skogsfinsk Museum',
    thumb   : '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk01_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk02.jpg',
    caption : 'Norsk Skogsfinsk Museum',
    thumb   : '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk02_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk03.jpg',
    caption : 'Norsk Skogsfinsk Museum',
    thumb   : '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk03_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src: '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk04.jpg',
    caption : 'Norsk Skogsfinsk Museum',
    thumb   : 'assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk04_thumb.jpg',
    type: "image",
    preload: true
  }
]

$(".norskFinskMuseum").on('click', function() {
  Fancybox.show(norskFinskMuseum, {
    // Your options go here
    loop : true,
  });

});