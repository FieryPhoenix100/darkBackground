chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStatus")
      sendResponse({status: localStorage.getItem('isEnabledExpansion')});
    else
      sendResponse({});
});

document.addEventListener('build', function (e) {
  chrome.runtime.sendMessage({method: "changeStatus", status: localStorage.getItem('isEnabledExpansion')});
}, false);