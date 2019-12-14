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

  chrome.runtime.onMessage.addListener(request => {
    if (request.method == "changeStatus") {
        var body = document.querySelector(".layout__row.layout__row_body");
        var codeList = document.querySelectorAll("code");
        var sidebar = document.querySelector(".sidebar");
        var title = document.querySelector(".post__title-text");
        if (request.status == "true") {
            body.classList.add("body")
            codeList.forEach((elem) => { elem.classList.add("code") })
            sidebar.remove();
            title.classList.add("title");
        }
        else {
            body.classList.remove("body");
            codeList.forEach((elem) => { elem.classList.remove("code") })
            //sidebar.add();
            title.classList.title.classList.add("title");("title");
        }
    }
});