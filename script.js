// let imageTest = document.querySelector("#id0");
// imageTest.style.display = 'none';

gameQueryURL = "https://www.cheapshark.com/api/1.0/deals"

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    console.log(queryURL);
    console.log(response);
});

let recipeApiID = '874acb4d'
let recipeApiKey = 'e13047121612bd90dd6135495a88f82a'
// remember to be able to dynamically search query
recipeQueryURL = 'https://api.edamam.com/search?q=chicken&app_id=' + apiID + '&app_key=' + apiKey;

$.ajax({
    url: queryURL,
    method: "GET",
    cors: true
}).then(function (response) {
    console.log(queryURL)
    console.log(response)
})

var j = 0
function createRow(area, n) {

    var arrImg = [
        "https://cdn.cnn.com/cnnnext/dam/assets/210104111236-beginner-gaming-pc-super-169.jpg",

        "https://media3.s-nbcnews.com/j/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422_ae181a762406ae9dce02dd0d5453d1ba.fit-2000w.jpg"

    ]
    let rowDiv = $("<div>").addClass("columns")
    for (i = 0; i < n; i++) {
        let colDiv = $("<div>").addClass("column")
        let cardDiv = $("<div>").addClass("card")
        let cardContentDiv = $("<div>").addClass("card-content")
        cardContentDiv.text('asdasdasdasddsad')
        cardContentDiv= $("<img>").attr("src", arrImg[j])

        rowDiv.append(colDiv)
        colDiv.append(cardDiv)
        cardDiv.append(cardContentDiv)
        area.append(rowDiv);
        j++
    }
}

// example
// createRow($("#preview-div"), 2);

// addEventListner for on('click') [ Recipes | Games ]
// add style.display = 'none'/'block' features - Hides or displays
// Relocate AJAX functions
// target specific information that you want to display from APIKey
// Impliment either checkbox or input field to send criteria call to key