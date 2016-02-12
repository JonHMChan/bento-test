(function(grid) {
	for (var key in grid) {
		var topic = grid[key];
		var html = '<div class="colored-box">';
		html += topic["name"];
		html += '</div>';
		$(".main").append(html);
	}
})(grid)