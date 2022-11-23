window.addEventListener('scroll', function() {
	var pages = document.querySelectorAll('.page');
   var navbarList = document.querySelectorAll('.navbar li');

   for (var i = 0; i < pages.length; i++) {
      var page = pages[i];
      var li = navbarList[i];
      var position = page.getBoundingClientRect();

      if (page.classList[0] == 'profile') {
         if (position.bottom > 10) {
            li.classList.add("navbar-active");
         } else li.classList.remove("navbar-active");
      } else {
         if ((position.top <= 10) && (position.bottom > 10)) {
            li.classList.add("navbar-active");
         } else li.classList.remove("navbar-active");
      }
   }
});
