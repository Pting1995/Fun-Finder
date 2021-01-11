document.querySelector(".games-search").style.display="none"
document.querySelector(".recipes-search").style.display="none"


var k = 0
function createPreviewRow(area, n) {
    // update arrays when a new api is added
    var arrImg = [
        "https://cdn.cnn.com/cnnnext/dam/assets/210104111236-beginner-gaming-pc-super-169.jpg",
        "https://media3.s-nbcnews.com/j/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422_ae181a762406ae9dce02dd0d5453d1ba.fit-2000w.jpg"
    ]
    // array of class names go here
    let divSubjects = [
        "games-div games-preview",
        "recipes-div recipes-preview"
    ]
   
    let rowDiv = $("<div>").addClass("columns previews")
    for (i = 0; i < n; i++) {
        let colDiv = $("<div>").addClass("column")
        let cardDiv = $("<div>").addClass("card")
        let cardContentDiv= $("<div>").addClass(divSubjects[i])
        cardContentDiv.addClass("card-content")
        let img = $("<img>").attr("src", arrImg[i]) 

        rowDiv.append(colDiv);
        colDiv.append(cardDiv);
        cardDiv.append(cardContentDiv);
        cardContentDiv.append(img);
        area.append(rowDiv);
    }
}

var j = 0;
function createResultsRow(area, n) {

    let rowDiv = $("<div>").addClass("columns")
    for (i = 0; i < n; i++) {
        let colDiv = $("<div>").addClass("column")
        let cardDiv = $("<div>").addClass("card")
        let cardContentDiv = $("<div>").addClass("card-content")
        cardContentDiv.attr("id", "id" + j)

        rowDiv.append(colDiv)
        colDiv.append(cardDiv)
        cardDiv.append(cardContentDiv)
        area.append(rowDiv);
        j++
    }
}

// example
createPreviewRow($("#preview-div"), 2);
// createResultsRow($("#preview-div"), 3);

// 1. create an array inside previewrow function that contains the genre types (games, recipes)
// 2 change the addeventlistener class tag




// ----------------------------------Games Div--------------------------------------------
$(".games-div").on("click", function () {
    notie.alert({
        type: 'success', // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
        text: 'You clicked on games section!',
        stay: false, // optional, default = false
        time: 3, // optional, default = 3, minimum = 1,
        position: 'bottom' // optional, default = 'top', enum: ['top', 'bottom']
      })
    document.querySelector(".games-search").style.display="block";
    document.querySelector("#desc-card").style.display="none";
    document.querySelector(".previews").style.display="none";
    document.querySelector(".recipes-search").style.display="none";
})

$(".games-submit").on("click", function () {
    var gameName = $("#game-name").val()
    var sortBy = $("#sort-by-games").val()
    var meta = $("#metacritic-games").val()
    
    gameQueryURL = "https://www.cheapshark.com/api/1.0/deals?title=" + gameName + "&sortBy=" + sortBy + "&metacritic=" + meta 

    $.ajax({
        url: gameQueryURL,
        method: "GET",
    }).then(function (response) {
        console.log(gameQueryURL);
        console.log(response);
        createResultsRow($("#preview-div"), 3);
        createResultsRow($("#preview-div"), 3);
        createResultsRow($("#preview-div"), 3);
        for (i = 0; i < 9; i++) {
            var titleString = $("<p>").text("Title: " + response[i].title)
            var img = $("<img>").attr("src", response[i].thumb)
            var metacritic = $("<p>").text("Metacritic score: " + response[i].metacriticScore)
            var steamRating = $("<p>").text("Steam Rating: " + response[i].steamRatingPercent)
            var onSale = $("<p>").text("On Sale Price: " + response[i].salePrice)
            var normPrice = $("<p>").text("Normal Price: " + response[i].normalPrice)

            $("#id" + i).append(titleString, img, metacritic, steamRating, onSale, normPrice)
            // console.log($("#id" + i))
        }
    });
})

    // ----------------------------------Recipes Div--------------------------------------------
$(".recipes-div").on("click", function () {
    document.querySelector(".games-search").style.display="none";
    document.querySelector("#desc-card").style.display="none";
    document.querySelector(".previews").style.display="none";
    document.querySelector(".recipes-search").style.display="block";
})

$(".recipe-submit").on("click", function (){
    var cuisineType= $("#cuisine-type").val()
    var mealType= $("#meal-type-recipes").val()
    var proteinType= $("#protein-recipes").val()
    var dietType= $("#diet-recipes").val()
    console.log(mealType,proteinType,dietType,cuisineType)


let recipeApiID = '874acb4d'
    let recipeApiKey = 'e13047121612bd90dd6135495a88f82a'
    recipeQueryURL = 'https://api.edamam.com/search?q=' + proteinType + '&app_id=' + recipeApiID + '&app_key=' + recipeApiKey + '&dietType=' + dietType;

    $.ajax({
        url: recipeQueryURL,
        method: "GET",
        cors: true
    }).then(function (response) {
        console.log(recipeQueryURL)
        console.log(response)
    })
})
// function createQuery (){


// }