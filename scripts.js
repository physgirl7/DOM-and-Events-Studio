function init(){
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const rocketImage = document.getElementById("rocket");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const flightDisplay = document.getElementById("flightDisplay");

    rocketImage.style.position = "absolute";
    rocketImage.style.bottom = "0px";
    rocketImage.style.right = "200px";

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
        rocketImage.style.bottom = "0px";
        rocketImage.style.right = "200px";
    })

    abortButton.addEventListener("click", function(event){
        const confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
            rocketImage.style.bottom = "0px";
            rocketImage.style.right = "200px";
        }
    })

    upButton.addEventListener("click", function(event){
        // console.log(parseInt(rocketImage.style.bottom));
        let originalPositionUp = parseInt(rocketImage.style.bottom);
        if (originalPositionUp > 240){
            originalPositionUp = parseInt(rocketImage.style.bottom);
        } else {
        let newPositionUp = originalPositionUp + 10;
        let newPositionUpPixels = newPositionUp +"px";
        rocketImage.style.bottom = newPositionUpPixels;
        }
        let originalHeight = parseInt(spaceShuttleHeight.innerHTML);
        let newHeight = originalHeight + 10000;
        spaceShuttleHeight.innerHTML = newHeight;
    })

    downButton.addEventListener("click", function(event){
        let originalPosition = parseInt(rocketImage.style.bottom);
        if (originalPosition < 0){
            originalPosition = parseInt(rocketImage.style.bottom);
        } else {
        let newPosition = originalPosition - 10;
        let newPositionPixels = newPosition + "px";
        rocketImage.style.bottom = newPositionPixels;
        }
        let originalHeight = parseInt(spaceShuttleHeight.innerHTML);
        let newHeight = originalHeight -10000;
        spaceShuttleHeight.innerHTML = newHeight;
    })

    rightButton.addEventListener("click", function(event){
        let originalPosition = parseInt(rocketImage.style.right);
        let newPosition = originalPosition - 10;
        let newPositionPixels = newPosition + "px";
        rocketImage.style.right = newPositionPixels;
    })

    leftButton.addEventListener("click", function(event){
        let originalPosition = parseInt(rocketImage.style.right);
        let newPosition = originalPosition + 10;
        let newPositionPixels = newPosition + "px";
        rocketImage.style.right = newPositionPixels;
    })

    // function pastMarginLimitBottom (rocketImage.style.bottom){
    //     let marginNumber = parseInt(rocketImage.style.bottom);
    //     if (marginNumber<flightDisplay.bottom )
        
    // }
}

// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", init);