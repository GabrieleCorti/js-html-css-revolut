var menuVoices = $(".menu_voice");

// menuVoices.each(
//   function (){
//     $(this).hover(
//       function (){
//         var dropMenu = $(this).children(".dropo_down_menu");
//
//         dropMenu.addClass("active");
//
//       },
//       function (){
//         var dropMenu = $(this).children(".dropo_down_menu");
//
//         dropMenu.removeClass("active");
//       }
//     );
//   }
// );

menuVoices.hover(
  function (){
    var dropMenu = $(this).children(".dropo_down_menu");

      dropMenu.addClass("active");

    },
  function (){
    var dropMenu = $(this).children(".dropo_down_menu");

    dropMenu.removeClass("active");
    }
);

////quando clicco aggiungo una classe active

menuVoices.click(
  function (){
    var dropMenu = $(this).children(".dropo_down_menu");

    if ( !dropMenu.hasClass("active_click") ){
      dropMenu.addClass("active_click");
    } else {
      dropMenu.removeClass("active_click");
    }
  }
);
