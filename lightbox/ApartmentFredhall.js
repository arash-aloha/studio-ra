const apartmentFredhall = [
  {
    src: '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall01.jpg',
    opts : {
      caption : 'Apartment Fredhäll',
      thumb   : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall01_tumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall02.jpg',
    opts : {
      caption : 'Apartment Fredhäll',
      thumb   : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall02_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall03.jpg',
    opts : {
      caption : 'Apartment Fredhäll',
      thumb   : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall03_thumb.jpg'
    },
    type: "image"
  },
  {
    src  : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall04.jpeg',
    opts : {
      caption : 'Apartment Fredhäll',
      thumb   : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall04_thumb.jpeg'
    },
    type: "image"
  },
]

$("#apartmentFredhall").on('click', function() {
  Fancybox.show(apartmentFredhall, {
    // Your options go here
    
    loop : true,
    thumbs : {
      autoStart : true
    },
    mainClass: "apartmentFredhall"
  });

});