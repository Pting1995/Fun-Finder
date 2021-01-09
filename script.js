// let imageTest = document.querySelector("#id0");
// imageTest.style.display = 'none';

var k = 0
function createPreviewRow(area, n) {
    // update arrays when a new api is added
    var arrImg = [
        "https://cdn.cnn.com/cnnnext/dam/assets/210104111236-beginner-gaming-pc-super-169.jpg",
        "https://media3.s-nbcnews.com/j/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422_ae181a762406ae9dce02dd0d5453d1ba.fit-2000w.jpg"
    ]
    // array of class names go here

    let rowDiv = $("<div>").addClass("columns")
    for (i = 0; i < n; i++) {
        let colDiv = $("<div>").addClass("column")
        let cardDiv = $("<div>").addClass("card")
        let cardContentDiv = $("<div>").addClass("card-content" )
        // iterrate thru array of class names above
        
        let img = $("<img>").attr("src", arrImg[k])
        // img.attr("onclick", imageClick[k])
        
        rowDiv.append(colDiv);
        colDiv.append(cardDiv);
        cardDiv.append(cardContentDiv);
        cardContentDiv.append(img);
        area.append(rowDiv);
        k++
    }
}

var j = 0;
function createResultsRow(area, n) {

    let rowDiv = $("<div>").addClass("columns")
    for (i = 0; i < n; i++) {
        let colDiv = $("<div>").addClass("column")
        let cardDiv = $("<div>").addClass("card")
        let cardContentDiv = $("<div>").addClass("card-content")
        cardContentDiv.text('asdasdasdasddsad')
        
        rowDiv.append(colDiv)
        colDiv.append(cardDiv)
        cardDiv.append(cardContentDiv)
        area.append(rowDiv);
        j++
    }
}

// example
createPreviewRow($("#preview-div"), 2);
createResultsRow($("#preview-div"), 3)

// 1. create an array inside previewrow function that contains the genre types (games, recipes)
// 2 change the addeventlistener class tag

// $(".recipes-div").on("click", function (event) {
//     event.preventDefault()
//     let recipeApiID = '874acb4d'
//     let recipeApiKey = 'e13047121612bd90dd6135495a88f82a'
//     // remember to be able to dynamically search query
//     recipeQueryURL = 'https://api.edamam.com/search?q=chicken&app_id=' + recipeApiID + '&app_key=' + recipeApiKey;

//     $.ajax({
//         url: recipeQueryURL,
//         method: "GET",
//         cors: true
//     }).then(function (response) {
//         console.log(recipeQueryURL)
//         console.log(response)
//     })
// })

$(".card-content").on("click", function () {
    gameQueryURL = "https://www.cheapshark.com/api/1.0/deals"

    $.ajax({
        url: gameQueryURL,
        method: "GET",
    }).then(function (response) {
        console.log(gameQueryURL);
        console.log(response);
    });
})



// addEventListner for on('click') [ Recipes | Games ]
// add style.display = 'none'/'block' features - Hides or displays
// Relocate AJAX functions
// target specific information that you want to display from APIKey
// Impliment either checkbox or input field to send criteria call to key

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
