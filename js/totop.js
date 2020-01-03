(function(window, document) {
  if(typeof hljs!='undefined') hljs.initHighlightingOnLoad();
  $('#go-to-top').on('click', function() {
	$("html, body").animate({
	  "scrollTop": 0
	}, 400);
	return false;
  });
  $(window).scroll(function() {
	let top = $(document).scrollTop();
	let g = $("#go-to-top");
	if (top > 300 && g.is(":hidden")) {
	  g.fadeIn();
	} else if (top < 300 && g.is(":visible")) {
	  g.fadeOut();
	}
  });

})(this, this.document);
