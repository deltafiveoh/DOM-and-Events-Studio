function init () {
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const status = document.getElementById("flightStatus");
    const upButton = document.getElementById("Up");
    const downButton = document.getElementById("Down");
    const leftButton = document.getElementById("Left");
    const rightButton = document.getElementById("Right");

    let imgObj = document.getElementById("rocket");
    imgObj.style.position = "absolute";
    imgObj.style.left = "150px";
    imgObj.style.bottom = "0px";
    const rightBoundary = 300;
    const leftBoundary = 0;
    let height = document.getElementById("spaceShuttleHeight");

    let inflight = false;
    let flightHeight = 0;

    takeOffButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response){
          status.innerHTML = "Shuttle in flight";
          document.getElementById("shuttleBackground").style.backgroundColor = "blue";
          height.innerHTML = 10000;
          inflight = true;
          flightHeight = 10000;
          imgObj.style.bottom = parseInt(imgObj.style.bottom) + 10 + 'px';
        }
      });

      landingButton.addEventListener("click", function() {
        let alert = window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        height.innerHTML = 0;
        inflight = false;
        imgObj.style.left = "150px";
        imgObj.style.bottom = "0px";
      });

      abortButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission");
        if (response){
            status.innerHTML = "Mission aborted";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            height.innerHTML = 0;
            inflight = false;
            imgObj.style.left = "150px";
            imgObj.style.bottom = "0px";
        }
      });

      upButton.addEventListener("click", function() {
        if (inflight && flightHeight < 250000){
            flightHeight += 10000;
            height.innerHTML = flightHeight;
            imgObj.style.bottom = parseInt(imgObj.style.bottom) + 10 + 'px';
        }
      });

      downButton.addEventListener("click", function() {
        if (inflight && flightHeight > 0){
            flightHeight -= 10000;
            height.innerHTML = flightHeight;
            imgObj.style.bottom = parseInt(imgObj.style.bottom) - 10 + 'px';
        }
      });

      leftButton.addEventListener("click", function() {
        if (inflight && parseInt(imgObj.style.left) >= leftBoundary){
            imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
        }
      });

      rightButton.addEventListener("click", function() {
        if (inflight && parseInt(imgObj.style.left) <= rightBoundary){
            imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
        }
      });
}

window.addEventListener("load", init);