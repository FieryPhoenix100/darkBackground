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

    gradient(document.getElementById("gradient"), 20, 180);
}

var gradient = (canva, w, h) => {
    var context, gradient, hue;
			 
    context = canva.getContext("2d");

    gradient = context.createLinearGradient(w/2,h,w/2,0);

    hue = [[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255],[255,0,0]];
				   
	     for (var i=0; i <= 6;i++){
             color = 'rgb('+hue[i][0]+','+hue[i][1]+','+hue[i][2]+')';
              gradient.addColorStop(i*1/6, color);
        };
        
        context.fillStyle = gradient;
        context.fillRect(0,0, w ,h);	
    }