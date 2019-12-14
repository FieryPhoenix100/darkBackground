if (localStorage.getItem('isEnabledExpansion') == null)
{
    localStorage.setItem('isEnabledExpansion', false);
}

window.onload = function () {
    if (localStorage.getItem('isEnabledExpansion') == "true") {
        enableButton.innerHTML  = "Disenable dark background";
    }
    else {
        enableButton.innerHTML  = "Enable dark background";
    }
    enableButton.onclick = function () {
        if (localStorage.getItem('isEnabledExpansion') == "true") {
            enableButton.innerHTML  = "Enable dark background"
            localStorage.setItem('isEnabledExpansion', false);
        }
        else {;
            enableButton.innerHTML  = "Disenable dark background";
            localStorage.setItem('isEnabledExpansion', true);
        }
        chrome.tabs.query({}, tabs => {
            tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, {method: "changeStatus", status: localStorage.getItem('isEnabledExpansion')});
          });
        });
    }
}