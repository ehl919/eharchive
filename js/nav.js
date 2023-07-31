$(function () {
   var opacity, transform;
   opacity = 0
   transform = -100
   $(".pop-places").on("click", function (e) {
      e.preventDefault();

      if (transform != 0) {
         transform = 0
         opacity = 1
      } else {
         transform = -100
         opacity = 0
      }

      $(".slide-left ul li").each(function (i) {
         $(this).delay(300 * i *.5).queue(function () {
            $(this).css({ "opacity": opacity, "transform": `translateX(${transform}%)` });
            $(this).dequeue();
         })
      });
   });
});

