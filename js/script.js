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
        square.addEventListener("mouseenter", enterSquare);
        square.addEventListener("mouseleave", enterSquare);

        container.appendChild(square);
    }
}

function enterSquare(e) {
    if (!e.target.classList.contains("square-filled")) {
        e.target.classList.add("square-filled");
    }
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
