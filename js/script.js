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
var allDrop = $(".dropo_down_menu");
var allVoice = $(".voice");

menuVoices.hover(
  function (){
    var dropMenu = $(this).children(".dropo_down_menu");

      dropMenu.addClass("active");
      allDrop.removeClass("active_click");
      allVoice.removeClass("clear");

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
    var nameMenu = $(this).children(".voice");

    dropMenu.toggleClass("active_click");
    nameMenu.toggleClass("clear");

  }
);
