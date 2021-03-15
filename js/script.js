var menuVoices = $(".menu_voice");

menuVoices.each(
  function (){
    $(this).hover(
      function (){
        var dropMenu = $(this).children(".dropo_down_menu");

        dropMenu.addClass("active");

      },
      function (){
        var dropMenu = $(this).children(".dropo_down_menu");

        dropMenu.removeClass("active");
      }
    );
  }
);
