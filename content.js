var body;
var codeList;
var sidebar;
var title;
var navbar;
var text;
var nav_link;
var company;
var comment;
var promo;

window.onload = () => {
    body = document.querySelector(".layout__row.layout__row_body");
    codeList = document.querySelectorAll("code");
    sidebar = document.querySelector(".sidebar");
    title = document.querySelector(".post__title-text");
    navbar = document.querySelector(".layout__row_navbar");
    text = document.querySelector("#post-content-body")
    nav_links = document.querySelectorAll(".nav-links__item-link")
    company = document.querySelector(".company-info__author");
    comment = document.querySelectorAll(".comment__message");
    promo = document.querySelectorAll(".layout__row_promo-blocks");
}

chrome.runtime.sendMessage({method: "getStatus"}, function(response) {
    if (response.status == "true") {
        initStyle();
    }
  });

  chrome.runtime.onMessage.addListener(request => {
    if (request.method == "changeStatus") {
        if (request.status == "true") {
            initStyle();
        }
        else {
            removeStyle(body, "body");
            removeStyleToList(codeList, "code");
            sidebar.style.visibility = "visible";
            removeStyle(title, "text");
            removeStyle(navbar, "navbar");
            removeStyle(text, "text");
            removeStyleToList(nav_links, "texts");
            removeStyle(company, "company");
            removeStyleToList(comment, "text");
            removeStyle(promo, "body");
        }
    }
});

function initStyle() {
    addStyle(body, "body");
    addStyleToList(codeList, "code")
    sidebar.style.visibility = "hidden";
    addStyle(title, "text");
    addStyle(navbar, "navbar");
    addStyle(text, "text");
    addStyleToList(nav_links, "text")
    addStyle(company, "company");
    addStyleToList(comment, "text")
    addStyleToList(promo, "body")
}

function addStyle(element, style) {
    if (element == null) {
        return;
    }
    element.classList.add(style);
}

function removeStyle(element, style) {
    if (element == null) {
        return;
    }
    element.classList.remove(style);
}

function addStyleToList(element, style) {
    if (element == null) {
        return;
    }
    element.forEach((elem) => { elem.classList.add(style) });
}

function removeStyleToList(element, style) {
    if (element == null) {
        return;
    }
    element.forEach((elem) => { elem.classList.remove(style) });
}