const apartmentFredhall = [
  {
    src: '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall01.jpg',
    caption : 'Apartment Fredhäll',
    thumb   : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall01_tumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall02.jpg',
    caption : 'Apartment Fredhäll',
    thumb   : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall02_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall03.jpg',
    caption : 'Apartment Fredhäll',
    thumb   : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall03_thumb.jpg',
    type: "image",
    preload: true
  },
  {
    src  : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall04.jpeg',
    caption : 'Apartment Fredhäll',
    thumb   : '../assets/Images/Work/Apartment_Fredhall/ApartmentFredhall04_thumb.jpeg',
    type: "image",
    preload: true
  },
]

$(".apartmentFredhall").on('click', function() {
  Fancybox.show(apartmentFredhall, {
    // Your options go here
    loop : true,
    mainClass: "apartmentFredhall"
  });

});