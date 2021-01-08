// let test = document.querySelector(".navbar");
// test.style.display = 'none';
// let imageTest = document.querySelector("#id0");
// imageTest.style.display = 'none';

queryURL = "https://www.cheapshark.com/api/1.0/deals"

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    console.log(queryURL);
    console.log(response);
});

apiID = '874acb4d'
apiKey = 'e13047121612bd90dd6135495a88f82a'
// remember to be able to dynamically search query
queryURL = 'https://api.edamam.com/search?q=chicken&app_id=' + apiID + '&app_key=' + apiKey;

$.ajax({
    url: queryURL,
    method: "GET",
    cors: true
}).then(function (response) {
    console.log(queryURL)
    console.log(response)
})

// function createRow 


var j = 0
function createRow(area, n) {

    // var arrImg = [
    //     "https://cdn.cnn.com/cnnnext/dam/assets/210104111236-beginner-gaming-pc-super-169.jpg",

    //     "https://media3.s-nbcnews.com/j/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422_ae181a762406ae9dce02dd0d5453d1ba.fit-2000w.jpg"

    // ]
    let rowDiv = $("<div>").addClass("columns")
    for (i = 0; i < n; i++) {


        let colDiv = $("<div>").addClass("column")
        let cardDiv = $("<div>").addClass("card")
        let cardContentDiv = $("<div>").addClass("card-content")
        cardContentDiv.text('asdasdasdasddsad')
        // let gameImage = $("<img>").attr("src", arrImg[j])
        // gameImage.attr("id","id" +j )
        rowDiv.append(colDiv)
        colDiv.append(cardDiv)
        cardDiv.append(cardContentDiv)
        area.append(rowDiv);

        console.log(rowDiv);
        // console.log(gameImage)
        j++

    }
}

createRow($("#description-div"), 2);
createRow($("#preview-div"), 3);