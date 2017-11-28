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
                                for(var i = 0; i < response.articles.length; i++){
                                    var pleaseWork = document.createElement("P");
                                    pleaseWork.innerHTML = response.articles[i].title;
                                    document.getElementById('comeOn').appendChild(pleaseWork);
                                }
                            } 
                        })
                 
             }
                 $('#source').submit(function(e){
        event.preventDefault();
        displayNews(document.getElementById("selection").value);
    });
        }
        
        
    });
});
