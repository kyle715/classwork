$(document).ready(function() {
	var quote;
	var author;
  var GOTQuote;
  var GOTChatacter;
	function getNewQuote() {
		$.ajax({
			url: 'https://talaikis.com/api/quotes/random/',
			success: function(response) {
				quote = response.quote;
				author = response.author;
				$('#quote').text(quote);
				if (author) {
					$('#author').text('-- ' + author);
				} else {
					$('#author').text('- uknown');
				}
			}
		});
	}
	function getGOTQuote() {
		$.ajax({
			url: 'https://got-quotes.herokuapp.com/quotes',
			success: function(response) {
			  console.log(response.GOTQuoteText);
				GOTQuote = response.quote;
		  	GOTChatacter = response.character;
				$('#quote').text(GOTQuote);
				$('#author').text('-- ' + GOTChatacter);
			}
		});
	}
	getNewQuote();
	$('#get-quote').on('click', function() {
		getNewQuote();
		changeImageBack();
	});
	$('#getGOTQuote').on('click', function() {
	  getGOTQuote();
	  changeImage();
	});
	$('.fa-twitter').on('click', function() {
	  var text = document.getElementById("quote").innerHTML;
    var person = document.getElementById("author").innerHTML;
		window.open('https://twitter.com/share?text=' + encodeURIComponent(text) + ' -- ' + (person));
	});
});

$(document).ready(function() {
 $('body').addClass('class1');
  });
 function changeImage() {
    $('body').css('background-image', 'url(https://fsmedia.imgix.net/9d/2c/c8/ed/b229/48a4/8afc/d997d7fc94aa/daenerys-targaryen-tyrion-lannister-and-dragonsrhaegal-and-viserion-game-of-thrones.png)');
   $('body').removeClass('class1');
   $('body').addClass('class2'); };
 function changeImageBack() {
    $('body').css('background-image', 'url(http://www.baltana.com/files/wallpapers-5/Vintage-Background-Wallpaper-HD-16556.jpg)');
    $('body').removeClass('class2');
    $('body').addClass('class1'); };
    
    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
   