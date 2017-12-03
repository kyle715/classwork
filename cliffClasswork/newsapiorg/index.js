/*global $*/
$(document).ready(function() {
	$.ajax({
		method: "GET",
		url: "https://newsapi.org/v2/sources?",
		data: {
			category: "business",
			country: "us",
			language: "en",
			apiKey: '3627f0612c5748d1842061db5487dace'
		},
		success: function(response) {
			if (response.status === "ok") {
				for (var i = 0; i < response.sources.length; i++) {
					var source = document.createElement("a");
					source.innerHTML = response.sources[i].name;
					document.getElementById("dropdown").appendChild(source);
					source.setAttribute('value', response.sources[i].id);
					source.setAttribute('onclick', `displayNews('${response.sources[i].id}');`);
					source.setAttribute('id', i);
				}
			}
		}
	});
});

function displayNews(response) {
	console.log(response);
	var id = document.getElementById('0').value;
	$.ajax({
		method: "GET",
		url: "https://newsapi.org/v2/top-headlines",
		data: {
			sources: response,
			apiKey: '3627f0612c5748d1842061db5487dace'
		},
		success: function(response) {
			document.getElementById('comeOn').innerHTML = '';
			document.getElementById('header').innerHTML = 'Top ' + ' Headlines';
			for (var i = 0; i < response.articles.length; i++) {
				var pleaseWork = document.createElement("UL");
				var itWorked = document.createElement("LI");
				var list = document.getElementById("comeOn");
				var link = document.createElement("a");
				document.getElementById('header').innerHTML = 'Top Headlines';
				pleaseWork.innerHTML = response.articles[i].title;
				itWorked.innerHTML = "<div><img src='" + response.articles[i].urlToImage + "'></span></div>" + '<br />' + response.articles[i].description;
				itWorked.setAttribute('data-target', '#comeOn');
				list.appendChild(link);
				link.appendChild(pleaseWork);
				list.appendChild(itWorked);
				pleaseWork.setAttribute('id', i);
				link.setAttribute('href', response.articles[i].url);
			}
		}
	});
}