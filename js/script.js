function createGrid(length) {
    let container = document.getElementById("container");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let containerLength = container.offsetWidth;
    
    for (let i = 0; i < (length * length); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = (containerLength / length) + "px";
        square.style.height = (containerLength / length) + "px";
        square.style.background = "rgba(255, 255, 255, 1.0)";
        square.addEventListener("mouseenter", enterSquare);
        square.addEventListener("mouseleave", leaveSquare);

        container.appendChild(square);
    }
}

function enterSquare(e) {
    let background = e.target.style.background;

    const redValue = Math.floor(Math.random() * 256);
    const greenValue = Math.floor(Math.random() * 256);
    const blueValue = Math.floor(Math.random() * 256);

    if (background.indexOf("a") === -1) {
        background =
                "rgba(" + redValue + ", " + greenValue + ", " + blueValue
                + ", 0.1)";
    } else {

        let lastComma = e.target.style.background.lastIndexOf(",");
        let closingBracket = e.target.style.background.indexOf(")");

        let alpha = parseFloat(e.target.style.background.slice(lastComma + 2, closingBracket));

        let newAlpha;

        switch (alpha) {
            case 0.1:
            case 0.2:
            case 0.3:
            case 0.4:
            case 0.5:
            case 0.6:
            case 0.7:
            case 0.8:
            case 0.9:
                newAlpha = alpha + 0.1;
                break;
        }

        background =
                "rgba(" + redValue + ", " + greenValue + ", " + blueValue
                + ", " + newAlpha + ")";

        background = background.replace(alpha, newAlpha);
    }

    e.target.style.background = background;
}

function leaveSquare(e) {

}

function askForNewLength(e) {
    let newLength;

    while (true) {
        newLength = prompt("How many squares per sides would you like?");

        if (newLength >= 16 && newLength <= 100) {
            break;
        } else {
            alert(
                "Error: Squares per size must be between 16 (inclusive) and 100 "
                + "(inclusive)"
            );
        }
    }

    createGrid(newLength);
}

document.addEventListener("DOMContentLoaded", function(e) {
    createGrid(16);

    let resizeButton = document.getElementById("resize");
    resizeButton.addEventListener("click", askForNewLength);
});
