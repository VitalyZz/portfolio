window.onload = function() {
    const width = screen.width;
    width <= 420 ? changeColor() : false;

    changeTextDecColor();

    function randomNum(begin, end) {
        let rand = begin + Math.random() * (end + 1 - begin);
        return Math.floor(rand); 
    }
    
    function changeColor() {
        const rand1 = randomNum(0, 255);
        const rand2 = randomNum(0, 255);
        const rand3 = randomNum(0, 255);

        const img = document.querySelector('img');
        img.style.border = `5px solid rgb(${rand1}, ${rand2}, ${rand3})`;

        setTimeout(function(){
            changeColor();
        }, 1000); 
    }

    function changeTextDecColor() {
        const rand1 = randomNum(0, 255);
        const rand2 = randomNum(0, 255);
        const rand3 = randomNum(0, 255);

        const lines = document.querySelectorAll('.contacts a');

        lines[0].style.textDecorationColor = `rgb(${rand3}, ${rand2}, ${rand1})`;
        lines[1].style.textDecorationColor = `rgb(${rand3}, ${rand1}, ${rand2})`;
        lines[2].style.textDecorationColor = `rgb(${rand2}, ${rand3}, ${rand1})`;
        lines[3].style.textDecorationColor = `rgb(${rand1}, ${rand3}, ${rand2})`;

        setTimeout(function(){
            changeTextDecColor();
        }, 1000); 
    }
}
