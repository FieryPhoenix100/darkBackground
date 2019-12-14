chrome.runtime.sendMessage({method: "getStatus"}, function(response) {
    if (response.status == "true") {
        var body = document.querySelector(".layout__row.layout__row_body")
        body.classList.add("body")
        var codeList = document.querySelectorAll("code")
        codeList.forEach((elem) => { elem.classList.add("code") })
        var sidebar = document.querySelector(".sidebar");
        sidebar.style.visibility = "hidden";
        var title = document.querySelector(".post__title-text");
        title.classList.add("title");
        var navbar = document.querySelector(".layout__row_navbar");
        navbar.classList.add("navbar");
        var text = document.querySelector("#post-content-body")
        text.classList.add("text");
        var nav_links = document.querySelectorAll(".nav-links__item-link");
        nav_links.classList.add("nav-links");
        var company = document.querySelector(".company-info__author");
        company.classList.add(".company");
        var comment = document.querySelectorAll(".comment__message");
        comment.forEach((elem) => { elem.classList.add(".comment") });
    }
  });

  chrome.runtime.onMessage.addListener(request => {
    if (request.method == "changeStatus") {
        var body = document.querySelector(".layout__row.layout__row_body");
        var codeList = document.querySelectorAll("code");
        var sidebar = document.querySelector(".sidebar");
        var title = document.querySelector(".post__title-text");
        var navbar = document.querySelector(".layout__row_navbar");
        var text = document.querySelector("#post-content-body")
        var nav_links = document.querySelectorAll(".nav-links__item-link")
        var company = document.querySelector(".company-info__author");
        var comment = document.querySelectorAll(".comment__message");
        if (request.status == "true") {
            addStale(body, "body");
            addStaleToList(codeList, "code")
            sidebar.style.visibility = "hidden";
            addStale(title, "title");
            addStale(navbar, "navbar");
            addStale(text, "text");
            addStaleToList(nav_links, "nav-links")
            addStale(company, "company");
            addStaleToList(comment, "comment")
        }
        else {
            removeStale(body, "body");
            removeStaleToList(codeList, "code");
            sidebar.style.visibility = "visible";
            removeStale(title, "title");
            removeStale(navbar, "navbar");
            removeStale(text, "text");
            removeStaleToList(nav_links, "nav-links");
            removeStale(company, "company");
            removeStale(comment, "comment");
            removeStaleToList(comment, "comment");
        }
    }
});

function addStale(element, style) {
    if (element == null) {
        return;
    }
    element.classList.add(style);
}

function removeStale(element, style) {
    if (element == null) {
        return;
    }
    element.classList.remove(style);
}

function addStaleToList(element, style) {
    if (element == null) {
        return;
    }
    element.forEach((elem) => { elem.classList.add(style) });
}

function removeStaleToList(element, style) {
    if (element == null) {
        return;
    }
    element.forEach((elem) => { elem.classList.remove(style) });
}