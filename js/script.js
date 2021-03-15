var menuVoices = $(".voice");

menuVoices.each(
  function (){
    $(this).hover(
      function (){
        var dropMenu = $(this).next();

        dropMenu.addClass("active");

      },
      function (){
        var dropMenu = $(this).next();

        dropMenu.removeClass("active");
      }
    );
  }
);
