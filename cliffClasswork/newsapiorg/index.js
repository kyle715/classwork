/*global $*/

    $(document).ready(function() {
    $.ajax({
        method: "GET",
        url:"https://newsapi.org/v2/sources?",
        data: {category:"business", country:"us",language:"en", apiKey:'3627f0612c5748d1842061db5487dace'},
        success: function(response){
            if (response.status === "ok") {
             for (var i = 0; i < response.sources.length; i++){
                var source = document.createElement("OPTION");
                source.innerHTML = response.sources[i].name;
                document.getElementById("selection").appendChild(source);
                source.setAttribute('value',  response.sources[i].id);
             }
            }
                    function displayNews(source){
                        $.ajax({
                            method: "GET",
                            url:"https://newsapi.org/v2/top-headlines?sources=" + source,
                            data:{apiKey:'3627f0612c5748d1842061db5487dace'},
                            success: function(response){
                            	document.getElementById('comeOn').innerHTML = '';
                                for(var i = 0; i < response.articles.length; i++){
                                    var pleaseWork = document.createElement("UL");
                                    var itWorked =  document.createElement("LI");
                                    var list = document.getElementById("comeOn");
                                    var link = document.createElement("a");
                                    pleaseWork.innerHTML = response.articles[i].title;
                                    itWorked.innerHTML = response.articles[i].description + "<img src='" + response.articles[i].urlToImage + "'></span>";
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
                 $('#source').submit(function(e){
        event.preventDefault();
        displayNews(document.getElementById("selection").value);
    });
        }
        
        
    });
});