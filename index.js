(function(grid) {

	var gridMapping = {};

	for (var key in grid) {
		var topic = grid[key];
		gridMapping[topic.name] = topic;
		var html = '<div class="' + topic["tags"][0] + ' colored-box" id="' + topic.name + '">';
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
		var categoryName = $(this).attr("id");
		var gridObject = gridMapping[categoryName];
		$(".colored-box").addClass("inactive");
		$(this).removeClass("inactive");
		for (var key in gridObject.after) {
			var relatedName = gridObject.after[key];
			$("#" + relatedName).removeClass("inactive")
		}
	})
})(grid)
