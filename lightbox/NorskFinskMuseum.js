const norskFinskMuseum = [
  {
    src: '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk01.jpg',
    opts : {
      caption : 'Norsk Skogsfinsk Museum',
      thumb   : '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk01_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk02.jpg',
    opts : {
      caption : 'Norsk Skogsfinsk Museum',
      thumb   : '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk02_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk03.jpg',
    opts : {
      caption : 'Norsk Skogsfinsk Museum',
      thumb   : '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk03_thumb.jpg'
    },
    type: "image"
  },
  {
    src: '../assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk04.jpg',
    opts : {
      caption : 'Norsk Skogsfinsk Museum',
      thumb   : 'assets/Images/Work/NorskSkogsfinskMuseum/NorskSkogsfinsk04_thumb.jpg'
    },
    type: "image"
  }
]

$(".norskFinskMuseum").on('click', function() {
  Fancybox.show(norskFinskMuseum, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});