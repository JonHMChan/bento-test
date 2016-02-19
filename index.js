(function(grid) {
	for (var key in grid) {
		var topic = grid[key];
		var html = '<div class="' + topic["tags"][0] + ' colored-box">';
		html += '<h2><a class="title" href="/"' + topic["home"] + '"" title="Show full page">' + topic["name"] + '</a><h2>';
		html += '<h3>' + topic["description"] + '</h3>'
		// add loop through links array here
		topic.links.forEach((link) => {
			html += '<p><a href="' + link["url"] + '" alt="' + link["name"] + ' target="_blank">' + link["name"] + '</a></p>'
		})
		// end loop here
		html += "</div>"
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
