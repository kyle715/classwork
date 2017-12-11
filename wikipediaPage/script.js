/* global $
 */
$(document).ready(function() {
	$("#searchTerm").keypress(function(e) {
		if (e.keyCode === 13) {
			var searchTerm = $("#searchTerm").val();
			var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
			$.ajax({
				url: url,
				type: 'GET',
				dataType: "json",
				success: function(data) {
				    document.getElementById('output').innerHTML = '';
					document.getElementById('searchTerm').value = '';
					for (var i = 0; i < data[1].length; i++) {
						$("#output").prepend("<div><div class='well'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
					}
				}
			});
		}
	});
	$('#search').on('click', function() {
		var searchTerm = $('#searchTerm').val();
		var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&formart=json&callback=?';
		$.ajax({
			url: url,
			type: "GET",
			dataType: 'json',
			success: function(data) {
				document.getElementById('output').innerHTML = '';
				document.getElementById('searchTerm').value = '';
				for (var i = 0; i < data[1].length; i++) {
					$('#output').prepend("<div><div class='well'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
				}
			},
		});
	});
});
$(document).ready(function() {
  $('input').focus(function() {
    $('.bar1').removeClass('hide');
    $('.bar2').removeClass('magnify');

  });
  $('input').blur(function() {
    $('.bar1').addClass('hide');
    $('.bar2').addClass('magnify');
  });
});