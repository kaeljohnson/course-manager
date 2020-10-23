
//Giving divs some style
var date = new Date();
var hours = date.getHours();
var ampm = hours >= 12 ? 'pm' : 'am';


const classDiv = document.getElementById("class");
const addSemDiv = document.getElementById("settings");
const delClassDiv = document.getElementById("del");
const welcomeDiv = document.getElementById("welcomeDiv");
const welcomeText = document.getElementById("welcomeTxt");

if (ampm == 'pm') {
    welcomeText.innerText = "Good Afternoon";
}
if (ampm == 'am') {
    welcomeText.innerText = "Good Morning";
}
 
delClassDiv.addEventListener("mouseover", () => {
    document.getElementById("del").style.boxShadow = "10px 20px 30px gray";
});
delClassDiv.addEventListener("mouseout", () => {
    document.getElementById("del").style.boxShadow = "";
});

addSemDiv.addEventListener("mouseover", () => {
    document.getElementById("settings").style.boxShadow = "10px 20px 30px gray";
});
addSemDiv.addEventListener("mouseout", () => {
    document.getElementById("settings").style.boxShadow = "";
});

classDiv.addEventListener("mouseover", () => {
    document.getElementById("class").style.boxShadow = "10px 20px 30px gray";
});
classDiv.addEventListener("mouseout", () => {
    document.getElementById("class").style.boxShadow = "";
});

//Adding a semester
const addSemBtn = document.getElementById("addSemesterBtn");

addSemBtn.addEventListener("click", () => {
    let newSemDiv = document.createElement("div");
    newSemDiv.style.borderStyle = "solid";
    newSemDiv.style.borderColor = "black";
    newSemDiv.style.borderRadius = "20px";
    newSemDiv.style.backgroundColor = "whitesmoke";
    newSemDiv.style.float = "left";
    newSemDiv.style.height = "600px";
    newSemDiv.style.width = "400px";
    newSemDiv.style.margin = "1%";

    document.getElementById("semHolder").appendChild(newSemDiv);

});
//Create Draggable Class Object
const addClassBtn = document.getElementById("addClassBtn");

addClassBtn.addEventListener("click", () =>{
    let newClass = document.getElementById("newClass");
    newClass.innerHTML = document.getElementById("addClassInput").value;

    document.getElementById("newClassTemp").remove();
    
    newClass.style.height = "40px";
    newClass.style.width = "230px";
    
    newClass.style.borderStyle = null;
    dragElement(document.getElementById("class"));
});


//Make Div Draggable

function dragElement(elmnt) {
  elmnt.style.position = "absolute";  
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
