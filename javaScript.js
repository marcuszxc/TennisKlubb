var buttonToggle = true;

function Test(button) {
  switch (button) {
    case "Hem":
      document.getElementsByTagName("iframe")[0].style.display = "none";
      document.getElementById("screenButton").style.display = "none";
      document.getElementsByTagName("h1")[0].style.display = "";
      document.getElementsByTagName("h2")[0].style.display = "";
      break;

    case "Kalender":
      document.getElementsByTagName("iframe")[0].style.display = "";
      document.getElementById("screenButton").style.display = "unset";
      document.getElementsByTagName("h1")[0].style.display = "none";
      document.getElementsByTagName("h2")[0].style.display = "none";
      document.getElementsByTagName("iframe")[0].setAttribute("src", "Kalender/Kalender.html");
      break;

    case "Info":
      document.getElementsByTagName("iframe")[0].style.display = "";
      document.getElementById("screenButton").style.display = "unset";
      document.getElementsByTagName("h1")[0].style.display = "none";
      document.getElementsByTagName("h2")[0].style.display = "none";
      document.getElementsByTagName("iframe")[0].setAttribute("src", "Info/Info.html");
      break;

    case "Omklädningsrum":
      document.getElementsByTagName("iframe")[0].style.display = "";
      document.getElementById("screenButton").style.display = "unset";
      document.getElementsByTagName("h1")[0].style.display = "none";
      document.getElementsByTagName("h2")[0].style.display = "none";
      document.getElementsByTagName("iframe")[0].setAttribute("src", "Omklädningsrum/Omklädningsrum.html");
      break;

    case "Bastu":
      document.getElementsByTagName("iframe")[0].style.display = "";
      document.getElementById("screenButton").style.display = "unset";
      document.getElementsByTagName("h1")[0].style.display = "none";
      document.getElementsByTagName("h2")[0].style.display = "none";
      document.getElementsByTagName("iframe")[0].setAttribute("src", "Bastu/Bastu.html");
      break;
  }
}

function BigScreen() {

  if (matchMedia("(min-width: 280px) and (max-width: 980px)").matches) 
  {
    if (buttonToggle === true) {
      document.getElementsByTagName("iframe")[0].style.position = "fixed";
      document.getElementsByTagName("iframe")[0].style.zIndex = "3";
      document.styleSheets[0].insertRule(`@keyframes ${buttonToggle}Screen { from {top: 10vh; height: 90vh;} to {top: 0vh; height: 100vh;} }`,document.styleSheets[0].cssRules.length);
      document.getElementsByTagName("iframe")[0].style.animation = `${buttonToggle}Screen 1s`;
      document.getElementsByTagName("iframe")[0].style.animationFillMode = "forwards";

      document.styleSheets[0].insertRule(`@keyframes ${buttonToggle}Button {from { left: 45%; bottom: 45%} to { left: 46%; bottom: 57%}}`);
      document.getElementById("screenButton").style.animation = `${buttonToggle}Button 1s`;
      document.getElementById("screenButton").style.animationFillMode = "forwards";
    } 
    
    else if (buttonToggle === false) 
    {
      document.getElementsByTagName("iframe")[0].style.position = "";
      document.getElementsByTagName("iframe")[0].style.zIndex = "";
      document.styleSheets[0].insertRule(`@keyframes ${buttonToggle}Screen { from {top: 0vh; height: 100vh} to {top: 10vh; height: 90vh;} }`,document.styleSheets[0].cssRules.length);
      document.getElementsByTagName("iframe")[0].style.animation = `${buttonToggle}Screen 1s`;
      document.getElementsByTagName("iframe")[0].style.animationFillMode = "forwards";

      document.styleSheets[0].insertRule(`@keyframes ${buttonToggle}Button {from { left: 47%; bottom: 57%} to { left: 45%; bottom: 45%}}`);
      document.getElementById("screenButton").style.animation = `${buttonToggle}Button 1s`;
      document.getElementById("screenButton").style.animationFillMode = "forwards";
    }
  } 
  
  else {

    if (buttonToggle === true) {
      document.getElementsByTagName("iframe")[0].style.position = "fixed";
      document.getElementsByTagName("iframe")[0].style.zIndex = "3";
      document.styleSheets[0].insertRule(`@keyframes ${buttonToggle}Screen { from {top: 20vh; height: 70vh; width: 80vw; } to {top: 0vh; height: 100vh; width: 100vw;} }`,document.styleSheets[0].cssRules.length);
      document.getElementsByTagName("iframe")[0].style.animation = `${buttonToggle}Screen 1s`;
      document.getElementsByTagName("iframe")[0].style.animationFillMode = "forwards";

      document.styleSheets[0].insertRule(`@keyframes ${buttonToggle}Button {from { left: 37%; bottom: 35%} to { left: 47%; bottom: 57%}}`);
      document.getElementById("screenButton").style.animation = `${buttonToggle}Button 1s`;
      document.getElementById("screenButton").style.animationFillMode = "forwards";
    } 
    
    else if (buttonToggle === false) 
    {
      document.getElementsByTagName("iframe")[0].style.position = "";
      document.getElementsByTagName("iframe")[0].style.zIndex = "";
      document.styleSheets[0].insertRule(`@keyframes ${buttonToggle}Screen { from {height: 100vh; width: 100vw; top: 0vh;} to {height: 70vh; width: 80vw; top: 20vh;} }`,document.styleSheets[0].cssRules.length);
      document.getElementsByTagName("iframe")[0].style.animation = `${buttonToggle}Screen 1s`;
      document.getElementsByTagName("iframe")[0].style.animationFillMode = "forwards";

      document.styleSheets[0].insertRule(`@keyframes ${buttonToggle}Button {from { left: 47%; bottom: 57%} to { left: 37%; bottom: 35%}}`);
      document.getElementById("screenButton").style.animation = `${buttonToggle}Button 1s`;
      document.getElementById("screenButton").style.animationFillMode = "forwards";
    }

  }

  buttonToggle = !buttonToggle;
}
