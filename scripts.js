function init(){
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");

    takeOffButton.addEventListener("click", function(event){
    const confirmTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff");
    if (confirmTakeoff){
        flightStatus.innerHTML = "Shuttle in flight";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = 10000;
    }
})

    landingButton.addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    })

    abortButton.addEventListener("click", function(event){
        const confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    })

}

// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", init);