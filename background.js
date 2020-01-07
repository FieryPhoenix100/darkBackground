chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStatus")
      sendResponse({status: localStorage.getItem('isEnabledExpansion')});
    else
      sendResponse({});
});

chrome.extension.onMessage.addListener(function(request) {
  if (request == "changeStatus") {
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
})

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});