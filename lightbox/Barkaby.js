const barkaby = [
  {
    src: '../assets/Images/Work/Barkarbystaden_Kv_15/07-Barkarbystden-red.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/07-Barkarbystden-red_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/16-Barkarbystaden15-3.jpeg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/16-Barkarbystaden15-3_thumb.jpeg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-006.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-006_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-049.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-049_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-058.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-058_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-065.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-065_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-066.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-066_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-099.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-099_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-101.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-101_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-105.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-105_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-107.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-107_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-108.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-108_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-111.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-111_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-113.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-113_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-114.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-144_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-122.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-122_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-128.jpg',
    opts : {
      caption : 'Barkarbystaden Kv 15',
      thumb   : '../assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-128_thumb.jpg'
    },
    type: "image"
  },
]

$(".barkaby").on('click', function() {
  Fancybox.show(barkaby, {
    // Your options go here
    loop : true,
    thumbs : {
      autoStart : true
    },
    mainClass: "autogyron",
    caption: "test"
  });

});