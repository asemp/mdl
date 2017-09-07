$(document).ready(function(){

//animations for homepage
  $('#heroimg').addClass('animated rollIn');
  $('#imgbackground').addClass('animated fadeInLeft');
  $('.container3').addClass('animated fadeInRight');
  $('.container2').addClass('animated fadeInUpBig');


//animations for services page

  $('#s1').addClass('animated fadeInDown');
  $('#section').addClass('animated fadeIn');
  $('#s2').addClass('animated fadeIn');
  $('#s3').addClass('animated fadeIn');
  $('#s4').addClass('animated fadeIn');
  $('#s5').addClass('animated fadeIn');




  $('.mdl-button').click(function(){
    var togglebutton = $(this).parent().prev(); // This sets a variable. the variable toggles the parent div (the div that mdl-button is in).and then the previous parent with "prev".//

    $(togglebutton).toggle('slow');
    console.log("button is toggled")
    $(".mdl-button").hide;
    console.log("button is hidden")
    // $('.mdl-button-close').css("display", "block");
    // console.log("close button is shown")
  });

});



// Script for toggling services but replacing with a close button

// $(document).ready(function(){
//     $(".mdl-button").click(function(){
//         var toggleButton = $(this).parent().prev();
//         $(toggleButton).toggle('slow');
//           console.log("variable toggleButton has been toggled!")
//         $(".mdl-button-vm").hide();
//           console.log("class mdl-button-vm has been hidden.")
//         $(".mdl-button-close").css("display", "block");
//           console.log("class mdl-button-close is now visble.")
//     });
//
//     $(".mdl-button-close").click(function (){
//         $(".mdl-button-close").css("display", "none");
//         $(".mdl-button-vm").show();
//     });
// });
