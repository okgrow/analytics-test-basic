// Scroll up to the top of page after changing routes.
// (Takes into account navbar height).
// If the previous route name is the same as the current (only params changed)
// then we might not want to scroll all the way to the top. So if there's an
// element with the id `scroll-top` then we scroll up (but never down) to it.
scrollToTop = function () {
  var self = this;

  if (self.ready()) {
    Tracker.nonreactive(function () {
      var current = self.route.name;
      var prev = Session.get("prev_route_name");
      var position = 0;

      // This is the same route, only params have changed, use #scroll-top
      if (current === prev) {
        var topEl = $('#scroll-top');
        if (topEl && topEl.offset()) {
          position = topEl.offset().top - $('nav.navbar').outerHeight();
        }
      }
      if (position < $(window).scrollTop()) {
        Tracker.afterFlush(function () {
          // defer until after the DOM update to avoid flicker
          $(window).scrollTop(position);
        });
      }
      Session.set("prev_route_name", current);
    });
  }
};
