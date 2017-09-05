// $(document).ready(function(){
//   $('.mdl-button').click(function(){
//     var togglebutton = $(this).parent().prev(); // This sets a variable. the variable toggles the parent div (the div that mdl-button is in).and then the previous parent with "prev".//
//
//     $(togglebutton).toggle('slow');
//     console.log("button is toggled")
//     $(".mdl-button").hide;
//     console.log("button is hidden")
//     // $('.mdl-button-close').css("display", "block");
//     // console.log("close button is shown")
//   });
//
// });
//



$(document).ready(function(){
    $(".mdl-button").click(function(){
        var toggleButton = $(this).parent().prev();
        $(toggleButton).toggle('slow');
          console.log("variable toggleButton has been toggled!")
        $(".mdl-button-vm").hide();
          console.log("class mdl-button-vm has been hidden.")
        $(".mdl-button-close").css("display", "block");
          console.log("class mdl-button-close is now visble.")
    });

    $(".mdl-button-close").click(function (){
        $(".mdl-button-close").css("display", "none");
        $(".mdl-button-vm").show();
    });
});
