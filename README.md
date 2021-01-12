# **Work Day Scheduler**
Finding activities to do for people to do since 2021! This starter website is driven to help the people stuck at find ways to make use of their free time. With the help of different API's, we are able to provide recommendations on various games, movies, and recipes that you may want to take a look at! Our site is still in the early production stage but our goal is to provide the most information about the specific search query possible. We hope to implement various link regarding the search results in the future.

<br><br>

![image](https://user-images.githubusercontent.com/52800632/104378592-157dbe80-54dd-11eb-8ecc-290f0c244fc0.png)



# **Installation**


Link javascript,jQuery, bulma, and notie.js to html file
```html
<script src="script.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
 <script src="https://unpkg.com/notie"></script>

```

Make a request from cheapshark, spoonacular, and omdb APIs

```js
let recipeApiKey = 'dc12cf1052074e368a0d30c4e037c61d'
    let recipeQueryURL = 'https://api.spoonacular.com/recipes/complexSearch?' + '&query=' + cuisineType + '&type=' + mealType + '&apiKey=' + recipeApiKey
    $.ajax({
        url: recipeQueryURL,
        method: "GET",
    }).then(function (response) {
        console.log(recipeQueryURL)
        console.log(response)
```


# **Built With**

<ul>
    <li> Bulma - Bulma framework based on Flexbox
    <li> Javascript - scripting language that allows implementation of complex web features
    <li> jQuery - Javascript library that simplifies javascript programming.
    <li> notie.js - Third party notification library 
    <li> HTML - The standard markup language for web pages 
    <li> CSS - used to describe the presentation of markup langauges such as HTML </li>
</ul>

# **Code Snippet**
This is our preview row code snippet. The main things to take note of is that there are two arrays, one for images and one that assigns classes. Because of the array we can dynamically create a column and scale it to as many subjects we have, in this case it is 3 subjects. Also the code showcases a variable which is “area” which is where the appended divs will be placed and “n” which is the amount of times we want the function to iterate
```js
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
```
# **Deployed Link**

https://arjaycaluag.github.io/Project-1/
# **Authors**

Ron-Arjay Caluag<br>
[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)<br>
[Github](https://github.com/ArjayCaluag)

Peter Ting<br>
[Linkedin](https://www.linkedin.com/in/pting002/)<br>
[Github](https://github.com/Pting1995)
# **License**

The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
