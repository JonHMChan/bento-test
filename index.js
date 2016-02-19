(function(grid) {
	for (var key in grid) {
		var topic = grid[key];
		var html = '<div class="' + topic["tags"][0] + ' colored-box" data-name="' + topic.name + '" data-related="' + topic.after + '" >';
		html += '<h2><a class="title" href="/"' + topic["home"] + '"" title="Show full page">' + topic["name"] + '</a><h2>';
		html += '<h3>' + topic["description"] + '</h3>'
		// add loop through links array here
		var count = 0;
		topic.links.forEach((link) => {
			if (count < 2 && link.level === 0) {
				count++;
				html += '<p><a href="' + link["url"] + '" alt="' + link["name"] + ' target="_blank">' + link["name"] + '</a></p>'
			}
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

	$(".colored-box").click(function(e){
		// go through colored boxes and check if a data-name is contained in array
		var relatedItems = $(this).data('related');
		var categoryName = $(this).data('name');
		var boxName;
		$(".colored-box").each(function(box){
			// check array and data-name attr
			boxName = $(this).data('name')
			if ( relatedItems.indexOf(boxName) == -1 ) {
				$(box).addClass('inactive');
			}
		})
	})
})(grid)
