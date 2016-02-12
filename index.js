(function(grid) {
	for (var key in grid) {
		var topic = grid[key];
		var html = '<div class="colored-box">';
		html += topic["name"];
		html += '</div>';
		$(".main").append(html);
	}

	var lastScroll = $(window).scrollTop();

	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if (scroll > lastScroll) {
			$("nav").slideUp();
		} else {
			$("nav").slideDown();
		}
		lastScroll = scroll;
	})
})(grid)