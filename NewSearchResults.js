
//returns a list of the search results scraped from the search page
function getNewSearchResults() {
    var out = [];

    var title = document.querySelectorAll('caption')[0].innerHTML

    var elements = document.querySelectorAll('td');
    for (var i = 13; i < elements.length + 1; i += 2) {
        if (elements[i]) {
            out.push(elements[i].innerHTML);
        }
    }
    return { "title": title, "results": out };
}

//Adds the results to the DOM
function loadNewSearchResults(results) {
    var title = document.createElement("h3");
    title.innerHTML = results.title;
    document.getElementById("resultsList").appendChild(title);

    results.results.forEach(result => {
        var toAdd = document.createElement("div");

        document.getElementById("resultsList").appendChild(toAdd);

        var icon = document.createElement("span");
        icon.setAttribute("uk-icon", "icon: link");

        var link = document.createElement("a");
        link.setAttribute("class", "uk-link-heading")
        link.innerHTML = icon.outerHTML + result;
        toAdd.appendChild(link);
    });
}