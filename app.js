function displayResultInfo() {
    var search = $("#search-term").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&apikey=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    $.ajax({
     url: queryURL,
     method: 'get'
   }).then(function(response){
       console.log(response)

   })
}
$("#search").on("click",displayResultInfo);