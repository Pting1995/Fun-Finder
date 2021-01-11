document.querySelector(".games-search").style.display = "none"
document.querySelector(".recipes-search").style.display = "none"

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
        let cardContentDiv = $("<div>").addClass(divSubjects[i])
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
    document.querySelector(".games-search").style.display = "block";
    document.querySelector("#desc-card").style.display = "none";
    document.querySelector(".previews").style.display = "none";
    document.querySelector(".recipes-search").style.display = "none";
})

$(".games-submit").on("click", function () {
    var gameName = $("#game-name").val()
    var sortBy = $("#sort-by-games").val()
    var metaCritic = $("#metacritic-games").val()


    console.log(gameName, sortBy, metaCritic);
})

gameQueryURL = "https://www.cheapshark.com/api/1.0/deals"

$.ajax({
    url: gameQueryURL,
    method: "GET",
}).then(function (response) {
    console.log(gameQueryURL);
    console.log(response);
});



// ----------------------------------Recipes Div--------------------------------------------
$(".recipes-div").on("click", function () {
    document.querySelector(".games-search").style.display = "none";
    document.querySelector("#desc-card").style.display = "none";
    document.querySelector(".previews").style.display = "none";
    document.querySelector(".recipes-search").style.display = "block";
})

$(".recipe-submit").on("click", function () {
    var cuisineType = $("#cuisine-type").val()
    var mealType = $("#meal-type-recipes").val()

    console.log(mealType,cuisineType)


    // let recipeApiID = '874acb4d'
    let recipeApiKey = 'dc12cf1052074e368a0d30c4e037c61d'
    let recipeQueryURL = 'https://api.spoonacular.com/recipes/complexSearch?' + '&query=' + cuisineType + '&type=' + mealType + '&apiKey=' + recipeApiKey
    $.ajax({
        url: recipeQueryURL,
        method: "GET",
    }).then(function (response) {
        console.log(recipeQueryURL)
        console.log(response)
        createResultsRow($('#preview-div'), 3)
        createResultsRow($('#preview-div'), 3)
        createResultsRow($('#preview-div'), 3)


        for (i = 0; i < 9; i++) {
            // let idDiv = response.id;
            let titleDiv = $('<p>').text(response.results[i].title)
            let imgDiv = $('<img>').attr("src", response.results[i].image)
            console.log(titleDiv, imgDiv)
            $('#id' + i).append(imgDiv,titleDiv)
        }

    })
})

// apiID = '874acb4d'
// apiKey = 'e13047121612bd90dd6135495a88f82a'	
// // queryURL = "https://api.edamam.com/search?q=chicken" + apiKey

// queryURL = 'https://api.edamam.com/search?q=chicken&app_id='+ apiID+ '&app_key=' + apiKey + '&from=0&to=3&calories=591-722&health=alcohol-free'


// $.ajax({
//     url: queryURL,
//     method: "GET",
//     cors: true
// }).then(function(response) {
//     console.log(queryURL)
//     console.log(response)
// })


// function createQuery (){


// }