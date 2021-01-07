
apiID = '874acb4d'
apiKey = 'e13047121612bd90dd6135495a88f82a'	
// queryURL = "https://api.edamam.com/search?q=chicken" + apiKey

queryURL = 'https://api.edamam.com/search?q=chicken&app_id='+ apiID+ '&app_key=' + apiKey + '&from=0&to=3&calories=591-722&health=alcohol-free'


$.ajax({
    url: queryURL,
    method: "GET",
    cors: true
}).then(function(response) {
    console.log(queryURL)
    console.log(response)
})


queryURL = "https://www.cheapshark.com/api/1.0/deals"
$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response) {
    console.log(queryURL);
    console.log(response);
});