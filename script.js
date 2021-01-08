queryURL = "https://www.cheapshark.com/api/1.0/deals"

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response) {
    console.log(queryURL);
    console.log(response);
});

apiID = '874acb4d'
apiKey = 'e13047121612bd90dd6135495a88f82a'
// remember to be able to dynamically search query
queryURL = 'https://api.edamam.com/search?q=chicken&app_id='+ apiID + '&app_key=' + apiKey;

$.ajax({
    url: queryURL,
    method: "GET",
    cors: true
}).then(function(response) {
    console.log(queryURL)
    console.log(response)
})

// function createRow 
