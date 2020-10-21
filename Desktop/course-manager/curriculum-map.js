//Giving divs some style
const classDiv = document.getElementById("class");
const addSemDiv = document.getElementById("settings");
const delClassDiv = document.getElementById("del");
const welcomeDiv = document.getElementById("welcomeDiv");
 
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
    newSemDiv.style.float = "left";
    newSemDiv.style.height = "900px";
    newSemDiv.style.width = "320px";
    newSemDiv.style.margin = "1%";

    document.getElementById("semHolder").appendChild(newSemDiv);
});
