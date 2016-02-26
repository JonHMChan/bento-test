(function(grid) {
	resizeBoxes();

	var gridMapping = {}, descriptions = {};
	var tagMapping = {}
	for (var key in grid) {
		var topic = grid[key];
		gridMapping[topic.name] = topic;
		descriptions[topic.name] = {name: topic.name, content: content[key] ? content[key].description : "" }

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
		var categoryName = $(this).attr("id");
		var gridObject = gridMapping[categoryName];
		$(".colored-box").addClass("inactive");
		$(this).removeClass("inactive");
		// sidebar's own
		if ($(".more-info.show").length == 0) { $(".more-info").addClass("show"); }
		$(".sidebar #title").html(categoryName)
		// sidebar finish
		appendBeforeRelations(gridObject, categoryName);
		appendAfterRelations(gridObject, categoryName)

	})

	$(".checkbox").click(function(){
		$(this).toggleClass("active")
	})

	$("#dismiss").click(function(){
		$(".more-info").removeClass("show");
		$(".colored-box.inactive").removeClass("inactive hide");
		$("#unrelated").prop("checked", false);
	})

	$( window ).resize(function() {
		resizeBoxes();
	});

	$(".checkbox").click(function() {
		// toggle the active class
		// if checked, get the category name from id,
		// for every tag class, add the hide class
		// else, for every tag class, add the hide class
		$(this).toggleClass("active")
		var id = $(".checkbox input").id
	})
	$("#unrelated").click(function(){
		debugger;
		if ($(this).is(':checked')) {
			$(".colored-box.inactive").addClass("hide");
		} else {
			$(".colored-box.inactive").removeClass("hide");
		}
	})

	function resizeBoxes() {
		var window_width = window.innerWidth;
		if (window_width > 1200) {
			$(".colored-box").css('width', '20%');
			$(".colored-box").css('padding-bottom', '20%');
		} else if (window_width > 960 && window_width < 1200) {
			var w = 100 / 3
			$(".colored-box").css('width', `${w}%`);
		} else if (window_width > 500 && window_width < 960)  {
			$(".colored-box").css('width', '50%');
		} else if (window_width < 500) {
			$(".colored-box").css('width', '100%');
		}
	}

	function appendBeforeRelations(gridObject, categoryName) {
		if (gridObject.before.length > 0) {
			if ($("#before-relations.show").length > 0) { $(".more-info").addClass("show"); }
			$("#before-relations").html("");
			$("#before-relations-relations").append("<h3>What to learn first</h3><article id='after'>")
			for (var key in gridObject.after) {
				var relatedName = gridObject.after[key];
				$("#" + relatedName).removeClass("inactive")
				$("#before-relations").append(`<a class='relation after option'><p><strong>${relatedName}</strong></p>`)
				$("#before-relations").append(`<p>${descriptions[categoryName].content}</p>`)
				$("#before-relations").append("</a></article>")
			}
		} else {
			$("#before-relations").removeClass("show")
		}
		$("#before-relations").append("</article>")
	}

	function appendAfterRelations(gridObject, categoryName) {
		if (gridObject.after.length > 0) {
			if ($("#after-relations.show").length > 0) { $(".more-info").addClass("show"); }
			$("#after-relations").html("");
			$("#after-relations").append("<h3>What to learn next</h3><article id='after'>")
			for (var key in gridObject.after) {
				var relatedName = gridObject.after[key];
				$("#" + relatedName).removeClass("inactive")
				$("#after-relations").append(`<a class='relation after option'><p><strong>${relatedName}</strong></p><p>${descriptions[relatedName].content}</p>`)
				$("#after-relations").append("</a>")
			}
		} else {
			$("#after-relations").removeClass("show")
		}
		$("#after-relations").append("</article>")
	}
})(grid)
