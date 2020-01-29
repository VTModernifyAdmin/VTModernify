
// this function decides how to load a given page depending on the URL
function load(dest) {

    if (dest == "https://banweb.banner.vt.edu/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu") {
        //homepage
        document.body.innerHTML = null;
        loadHTML("NewHeader.html", function () {
            loadHTML('NewHome.html', function () {
                loadHTML("NewFooter.html", function () { });
            });
        });

    }
    else if (dest == "https://banweb.banner.vt.edu/ssb/prod/twbkwbis.P_WWWLogin") {
        //login
        document.body.innerHTML = null;

        loadHTML('NewLogin.html', function () { });

    }
    else if (dest == "https://banweb.banner.vt.edu/ssb/prod/twbksrch.P_ShowResults") {
        //search results
        var results = getSearchResults();

        loadHTML("NewHeader.html", function () { });

        document.body.innerHTML = null;
        loadHTML('NewResults.html', function () {
            printResults(results);
        });

        loadHTML("NewFooter.html", function () { });
    }
    else if (dest == "https://banweb.banner.vt.edu/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu" ||
        dest == "https://banweb.banner.vt.edu/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu#") {

        document.body.innerHTML = null;
        
        //hokiespa
        loadHTML("NewHeader.html", () => {
            loadHTML('NewHokieSpa.html', () => {
                loadHTML('NewHokieSpaContent.html', () => {
                    loadHTML("NewFooter.html", () => { })
                })
            })
        });
    }
    else if (dest == "https://banweb.banner.vt.edu/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_GenMnu") {
        //hokieplus

        document.body.innerHTML = null;

        loadHTML("NewHeader.html", () => {
            loadHTML('NewHokieSpa.html', () => {
                generateHokiePLUS(() => {
                    loadHTML("NewFooter.html", () => { })
                })
            })
        });

    }

    // deleting all of the css in the window so it doesnt screw with my stuff

    document.querySelectorAll('link[rel="stylesheet"]')
        .forEach(el => el.parentNode.removeChild(el));

    // imports cdns into the head of the html
    var sc = document.createElement("script");
    sc.setAttribute("src", "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit.min.js");
    sc.setAttribute("type", "text/javascript");
    document.head.appendChild(sc);

    var sc2 = document.createElement("script");
    sc2.setAttribute("src", "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js");
    sc2.setAttribute("type", "text/javascript");
    document.head.appendChild(sc2);

}


function loadHTML(localURL, callback) {
    const url = chrome.runtime.getURL(localURL);

    fetch(url)
        .then((res) => {
            return res.text();
        })
        .then((data) => {
            var element = document.createElement("div");
            element.innerHTML = data;

            document.querySelectorAll("body")[0].appendChild(element);
            callback();
        });
}


// function getSearchResultsTest() {
//     var i = 0;
//     document.querySelectorAll('caption')
//         .forEach(element => {
//             var toAdd = document.createElement("div");
//             toAdd.innerHTML = i + element.innerHTML;
//             document.body.appendChild(toAdd);
//         });
// }



// put this with generate html 

function getSearchResults() {
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

function printResults(results) {

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


//TODO
/*
Create dynmically loaded pages based on the content of the hokiespa HTML page
- do this with timetable of classes


*/