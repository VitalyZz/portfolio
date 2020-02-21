function randomNum(begin, end) {
    let rand = begin + Math.random() * (end + 1 - begin);
    return Math.floor(rand); 
}

function changeColor() {
    const width = screen.width;
    const rand1 = randomNum(0, 255);
    const rand2 = randomNum(0, 255);
    const rand3 = randomNum(0, 255);
    if (width <= 420) {
        const img = document.querySelector('img');

        img.style.border = `5px solid rgb(${rand1}, ${rand2}, ${rand3})`;

        setTimeout(function(){
            changeColor();
        }, 1000); 
    }
    const lines = document.querySelectorAll('.contacts a');
    lines[0].style.textDecorationColor = `rgb(${rand3}, ${rand2}, ${rand1})`;
    lines[1].style.textDecorationColor = `rgb(${rand3}, ${rand1}, ${rand3})`;
    lines[2].style.textDecorationColor = `rgb(${rand2}, ${rand3}, ${rand1})`;
}