let labels = document.getElementsByTagName("label");
let passcodeLabel = labels[0];
let passcodeDiv = passcodeLabel.parentElement;
let passcodeField = passcodeDiv.childNodes[1];//.childNodes[0].data;

if(passcodeLabel.childNodes[0].data === "Passcode:"){
    addPatternButton();
}

function addPatternButton(){
    let text = document.createElement("label");
    text.setAttribute("class", "control-label");
    text.appendChild(document.createTextNode("Is Pattern:"));
    let passcodeToggleLabel = document.createElement("label");
    passcodeToggleLabel.setAttribute("class", "portal-switch green");
    let passcodeToggleButton = document.createElement("input");
    passcodeToggleButton.setAttribute("type", "checkbox");
    passcodeToggleButton.setAttribute("class", "fastclickable");
    let passcodeToggleSpan = document.createElement("span");
    passcodeToggleSpan.setAttribute("class", "slider");
    passcodeDiv.appendChild(text);
    passcodeDiv.appendChild(passcodeToggleLabel);
    passcodeToggleLabel.appendChild(passcodeToggleButton);
    passcodeToggleLabel.appendChild(passcodeToggleSpan);


    passcodeToggleLabel.addEventListener("click", function(){
        let inputPasscode = passcodeField.
    })
}


 /*console.log(passcodeField);
if(passcodeField !== undefined){
   
    passcodeField.setAttribute("style", "background-color:green");
}*/