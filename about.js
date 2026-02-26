function showPool() {
    var poolInfo = document.getElementById("pool");
    var playAreaInfo = document.getElementById("play");
    var agilityCourseInfo = document.getElementById("agility");

    document.getElementById(poolInfo).setAttribute("style", "visibility: visible; display: block;");
    document.getElementById(playAreaInfo).setAttribute("style", "visibility: hidden; display: none;");
    document.getElementById(agilityCourseInfo).setAttribute("style", "visibility: hidden; display: none;");
}

function showPlayArea() {
    var poolInfo = document.getElementById("pool");
    var playAreaInfo = document.getElementById("play");
    var agilityCourseInfo = document.getElementById("agility");

    document.getElementById(poolInfo).setAttribute("style", "visibility: hidden; display: none;");
    document.getElementById(playAreaInfo).setAttribute("style", "visibility: visible; display: block;");
    document.getElementById(agilityCourseInfo).setAttribute("style", "visibility: hidden; display: none;");
}

function showAgilityCourse() {
    var poolInfo = document.getElementById("pool");
    var playAreaInfo = document.getElementById("play");
    var agilityCourseInfo = document.getElementById("agility");

    document.getElementById(poolInfo).setAttribute("style", "visibility: hidden; display: none;");
    document.getElementById(playAreaInfo).setAttribute("style", "visibility: hidden; display: none;");
    document.getElementById(agilityCourseInfo).setAttribute("style", "visibility: visible; display: block;");
}