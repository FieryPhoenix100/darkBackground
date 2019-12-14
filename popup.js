if (localStorage.getItem('isEnabledExpansion') == null)
{
    localStorage.setItem('isEnabledExpansion', false);
}

var event = document.createEvent('Event');

event.initEvent('build', true, true);

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
        document.dispatchEvent(event);
    }
}