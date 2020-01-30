
// this function decides how to load a given page depending on the URL
function load(destURL) {

    if (destURL == "https://banweb.banner.vt.edu/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu") {
        //homepage
        document.body.innerHTML = null;
        loadHTML("NewHeader.html", function () {
            loadHTML('NewHome.html', function () {
                loadHTML("NewFooter.html", function () { });
            });
        });

    }
    else if (destURL == "https://banweb.banner.vt.edu/ssb/prod/twbkwbis.P_WWWLogin") {
        //login
        document.body.innerHTML = null;
        loadHTML('NewLogin.html', function () { });
    }
    else if (destURL == "https://banweb.banner.vt.edu/ssb/prod/twbksrch.P_ShowResults") {
        //search results
        var results = getNewSearchResults();
        document.body.innerHTML = null;

        loadHTML("NewHeader.html", function () {            
            loadHTML('NewResults.html', function () {
                loadNewSearchResults(results);

                loadHTML("NewFooter.html", function () { });
            });

        });
    }
    else if (destURL == "https://banweb.banner.vt.edu/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu" ||
        destURL == "https://banweb.banner.vt.edu/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu#") {

        document.body.innerHTML = null;

        //hokiespa
        loadHTML("NewHeader.html", () => {
            loadHTML('NewNeck.html', () => {
                loadHTML('NewHokieSpaHome.html', () => {
                    loadHTML("NewFooter.html", () => { })
                })
            })
        });
    }
    else if (destURL == "https://banweb.banner.vt.edu/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_GenMnu") {
        //hokieplus

        document.body.innerHTML = null;

        loadHTML("NewHeader.html", () => {
            loadHTML('NewHokiePLUS.html', () => {
                loadHTML("NewFooter.html", () => { })
            })
        });

    }

    // deleting all of the css in the window so it doesnt screw with my stuff

    document.querySelectorAll('link[rel="stylesheet"]')
        .forEach(el => el.parentNode.removeChild(el));

    // imports cdns into the head of the html
    // this is so that I can use the UI kit styling
    var sc = document.createElement("script");
    sc.setAttribute("src", "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit.min.js");
    sc.setAttribute("type", "text/javascript");
    document.head.appendChild(sc);

    var sc2 = document.createElement("script");
    sc2.setAttribute("src", "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js");
    sc2.setAttribute("type", "text/javascript");
    document.head.appendChild(sc2);
}


//Adds a HTML to the DOM
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