chrome.runtime.sendMessage({method: "getStatus"}, function(response) {
    if (response.status == "true") {
        var body = document.querySelector(".layout__row.layout__row_body")
        body.classList.add("body")
        var codeList = document.querySelectorAll("code")
        codeList.forEach((elem) => { elem.classList.add("code") })
        var sidebar = document.querySelector(".sidebar");
        sidebar.remove();
        var title = document.querySelector(".post__title-text");
        title.classList.add("title");
    }
  });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "changeStatus") {
        if (request.status == "true") {
            var body = document.querySelector(".layout__row.layout__row_body")
            body.classList.add("body")
            var codeList = document.querySelectorAll("code")
            codeList.forEach((elem) => { elem.classList.add("code") })
            var sidebar = document.querySelector(".sidebar");
            sidebar.remove();
            var title = document.querySelector(".post__title-text");
            title.classList.add("title");
        }
    }
});