const tracker = document.getElementById("tracker");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    tracker.animate({
    top: `${clientY}px`,
    left: `${clientX}px`
    }, { duration: 3000, fill: "forwards"});
}