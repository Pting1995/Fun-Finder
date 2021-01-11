document.querySelector(".games-search").style.display = "none"
document.querySelector(".films-search").style.display = "none"
document.querySelector(".recipes-search").style.display = "none"

var k = 0;
function createPreviewRow(area, n) {
    // update arrays when a new api is added
    var arrImg = [
        "https://cdn.cnn.com/cnnnext/dam/assets/210104111236-beginner-gaming-pc-super-169.jpg",
        "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg",
        "https://media3.s-nbcnews.com/j/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422_ae181a762406ae9dce02dd0d5453d1ba.fit-2000w.jpg"
    ]

    // array of class names go here
    let divSubjects = [
        "games-div games-preview",
        "movies-div movies-preview",
        "recipes-div recipes-preview"
    ]

    let rowDiv = $("<div>").addClass("columns previews");
    for (i = 0; i < n; i++) {
        let colDiv = $("<div>").addClass("column");
        let cardDiv = $("<div>").addClass("card");
        let cardContentDiv = $("<div>").addClass(divSubjects[i]);
        cardContentDiv.addClass("card-content");
        let img = $("<img>").attr("src", arrImg[i]);

        rowDiv.append(colDiv);
        colDiv.append(cardDiv);
        cardDiv.append(cardContentDiv);
        cardContentDiv.append(img);
        area.append(rowDiv);
    }
}

var j = 0;
function createResultsRow(area, n) {

    let rowDiv = $("<div>").addClass("columns");
    for (i = 0; i < n; i++) {
        let colDiv = $("<div>").addClass("column");
        let cardDiv = $("<div>").addClass("card");
        let cardContentDiv = $("<div>").addClass("card-content");
        cardContentDiv.attr("id", "id" + j);

        rowDiv.append(colDiv);
        colDiv.append(cardDiv);
        cardDiv.append(cardContentDiv);
        area.append(rowDiv);
        j++;

    }
}
createPreviewRow($("#preview-div"), 3);
// createResultsRow($("#preview-div"), 3);



// -----------------------------Home Div ----------------------------------------------

$(".home-div").on("click", function(){

    notie.alert({
        type: 'success',
        text: 'Back to home Screen!',
        stay: false,
        time: 3,
        position: 'bottom'
    })

    document.querySelector("#desc-card").style.display = "block";
    document.querySelector(".previews").style.display = "block";
    document.querySelector(".games-search").style.display="none";
    document.querySelector(".recipes-search").style.display = "none";
    document.querySelector(".films-search").style.display= "none";
    


})


// ----------------------------------Games Div--------------------------------------------
$(".games-div").on("click", function () {
    notie.alert({
        type: 'success',
        text: 'You clicked on games section!',
        stay: false,
        time: 3,
        position: 'bottom'
    })
    document.querySelector(".games-search").style.display = "block";
    document.querySelector("#desc-card").style.display = "none";
    document.querySelector(".previews").style.display = "none";
    document.querySelector(".recipes-search").style.display = "none";
    document.querySelector(".films-search").style.display = "none";
})

$(".games-submit").on("click", function () {
    notie.alert({
        type: 'success',
        text: 'You are searching in the games section!',
        stay: false,
        time: 3,
        position: 'bottom'
    })
    var gameName = $("#game-name").val();
    var sortBy = $("#sort-by-games").val();
    var meta = $("#metacritic-games").val();

    gameQueryURL = "https://www.cheapshark.com/api/1.0/deals?title=" + gameName + "&sortBy=" + sortBy + "&metacritic=" + meta

    $.ajax({
        url: gameQueryURL,
        method: "GET",
    }).then(function (response) {
        console.log(gameQueryURL);
        console.log(response);
        $("preview-div").empty();
        createResultsRow($("#preview-div"), 3);
        createResultsRow($("#preview-div"), 3);
        createResultsRow($("#preview-div"), 3);
        for (i = 0; i < 9; i++) {
            var titleString = $("<p>").text("Title: " + response[i].title);
            var img = $("<img>").attr("src", response[i].thumb);
            var metacritic = $("<p>").text("Metacritic score: " + response[i].metacriticScore);
            var steamRating = $("<p>").text("Steam Rating: " + response[i].steamRatingPercent);
            var onSale = $("<p>").text("On Sale Price: " + response[i].salePrice);
            var normPrice = $("<p>").text("Normal Price: " + response[i].normalPrice);

            $("#id" + i).append(titleString, img, metacritic, steamRating, onSale, normPrice);
            // console.log($("#id" + i))
        }
    });
})

// ----------------------------------Movies Div--------------------------------------------
$(".movies-div").on("click", function () {
    notie.alert({
        type: 'success',
        text: 'You clicked on the movies section!',
        stay: false,
        time: 3,
        position: 'bottom'
    })
    document.querySelector(".games-search").style.display = "none";
    document.querySelector("#desc-card").style.display = "none";
    document.querySelector(".previews").style.display = "none";
    document.querySelector(".films-search").style.display = "block";
    document.querySelector(".recipes-search").style.display = "none";
})

$(".movies-submit").on("click", function () {
    notie.alert({
        type: 'success',
        text: 'You are searching in the movies section!',
        stay: false,
        time: 3,
        position: 'bottom'
    })
    var filmKeyword = $("#film-keyword").val();
    var movieType = $("#movie-type").val();

    console.log(movieType, filmKeyword)

    let movieApiKey = '2d0f5a76';
    let movieQueryURL = 'https://omdbapi.com/?' + 's=' + filmKeyword + '&type=' + movieType + '&apikey=' + movieApiKey;

    $.ajax({
        url: movieQueryURL,
        method: "GET",
    }).then(function (response) {
        $("preview-div").empty();
        console.log(movieQueryURL)
        console.log(response)
        createResultsRow($('#preview-div'), 3)
        createResultsRow($('#preview-div'), 3)
        createResultsRow($('#preview-div'), 3)


        for (i = 0; i < 9; i++) {
            let titleDiv = $('<p>').text(response.Search[i].Title);
            let imgDiv = $('<img>').attr("src", response.Search[i].Poster);
            console.log(titleDiv, imgDiv);
            $("#id" + i).append(titleDiv, imgDiv);
        }

    })
})

// ----------------------------------Recipes Div--------------------------------------------
$(".recipes-div").on("click", function () {
    
        notie.alert({
            type: 'success',
            text: 'You clicked on the recipe section!',
            stay: false,
            time: 3,
            position: 'bottom'
        })

    document.querySelector(".games-search").style.display = "none";
    document.querySelector("#desc-card").style.display = "none";
    document.querySelector(".previews").style.display = "none";
    document.querySelector(".recipes-search").style.display = "block";
    document.querySelector(".films-search").style.display = "none";
})

$(".recipe-submit").on("click", function () {
    notie.alert({
        type: 'success',
        text: 'You are searching in the recipe section!',
        stay: false,
        time: 3,
        position: 'bottom'
    })
    
    var cuisineType = $("#cuisine-type").val();
    var mealType = $("#meal-type-recipes").val();

    console.log(mealType, cuisineType)

    let recipeApiKey = 'dc12cf1052074e368a0d30c4e037c61d'
    let recipeQueryURL = 'https://api.spoonacular.com/recipes/complexSearch?' + '&query=' + cuisineType + '&type=' + mealType + '&apiKey=' + recipeApiKey
    $.ajax({
        url: recipeQueryURL,
        method: "GET",
    }).then(function (response) {
        console.log(recipeQueryURL)
        console.log(response)
        createResultsRow($('#preview-div'), 3);
        createResultsRow($('#preview-div'), 3);
        createResultsRow($('#preview-div'), 3);

        for (i = 0; i < 9; i++) {
            let titleDiv = $('<p>').text(response.results[i].title);
            let imgDiv = $('<img>').attr("src", response.results[i].image);
            console.log(titleDiv, imgDiv);
            $('#id' + i).append(imgDiv, titleDiv);
        }
    })
})