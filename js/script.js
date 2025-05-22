function enterSquare(e) {
    if (!e.target.classList.contains("square-filled")) {
        e.target.classList.add("square-filled");
    }
}

function leaveSquare(e) {

}

document.addEventListener("DOMContentLoaded", function(e) {
    let container = document.getElementById("container");
    
    for (let i = 0; i < (16 * 16); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseenter", enterSquare);
        square.addEventListener("mouseleave", enterSquare);

        container.appendChild(square);
    }
});
