function showPool() {
    document.getElementById("pool").setAttribute("style", "visibility: visible; display: block;");
    document.getElementById("play").setAttribute("style", "visibility: hidden; display: none;");
    document.getElementById("agility").setAttribute("style", "visibility: hidden; display: none;");
}

function showPlayArea() {
    document.getElementById("pool").setAttribute("style", "visibility: hidden; display: none;");
    document.getElementById("play").setAttribute("style", "visibility: visible; display: block;");
    document.getElementById("agility").setAttribute("style", "visibility: hidden; display: none;");
}

function showAgilityCourse() {
    document.getElementById("pool").setAttribute("style", "visibility: hidden; display: none;");
    document.getElementById("play").setAttribute("style", "visibility: hidden; display: none;");
    document.getElementById("agility").setAttribute("style", "visibility: visible; display: block;");
}