const container = document.querySelector('#container');
const buttons   = document.querySelector('#buttons');
const resetBtn  = document.createElement('button');
const blackBtn  = document.createElement('button');
const grayBtn   = document.createElement('button');
const rgbBtn    = document.createElement('button');
const whiteBtn  = document.createElement('button');
const image = document.querySelector('#image')





function createDivs(col, rows) {
    for (let i = 0; i < (col * rows); i++) {
        const divs = document.createElement('div');
        divs.style.border = '1px solid transparent';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(divs).classList.add('square');
       console.log(divs);
    };
};



function resize() {
    resetBtn.textContent = "Size";
    resetBtn.addEventListener('click', () => {
        let userChoice = prompt(' choose size?');
        if (userChoice === null || userChoice < 5
            ) {
            reset();
            createDivs(16, 16);
            blackSketch();
            graySketch()
            rgbSketch()
            whiteSketch()
        } else {
            image.style.display ="none";
            reset();
            createDivs(userChoice, userChoice);
            blackSketch();
            graySketch()
            rgbSketch()
            whiteSketch()    
            }

     })
     buttons.appendChild(resetBtn).classList.add('btn')
     resetBtn.classList.add('resize-btn');
     console.log(resetBtn);
}
resize()

 function blackSketch() {
     const squares = container.querySelectorAll('.square');
     blackBtn.textContent = 'Black';
     blackBtn.addEventListener('click', () =>  {
        squares.forEach( square => square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
     }))
    
    })
    buttons.appendChild(blackBtn).classList.add('btn');
};
blackSketch();
    
 function graySketch() {
     const squares = container.querySelectorAll('.square');
     grayBtn.textContent = 'Gray';
     grayBtn.addEventListener('click', () =>  {
        squares.forEach( square => square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "gray";
     }))
    
    })
    buttons.appendChild(grayBtn).classList.add('btn');
};
graySketch();
    
 function rgbSketch() {
     const squares = container.querySelectorAll('.square');
    rgbBtn.textContent = 'RGB';
     rgbBtn.addEventListener('click', () =>  {
        squares.forEach( square => square.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255);
            let B= Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            
            square.style.backgroundColor = `rgb(${R},${B},${G})`;
     }))
    
    })
    buttons.appendChild(rgbBtn).classList.add('btn');
};
rgbSketch();


 function whiteSketch() {
     const squares = container.querySelectorAll('.square');
    whiteBtn.textContent = 'White';
     whiteBtn.addEventListener('click', () =>  {
        squares.forEach( square => square.addEventListener('mouseover', () => {
            
            square.style.backgroundColor = "";
     }))
    
    })
    buttons.appendChild(whiteBtn).classList.add('btn');
};
whiteSketch();


    
        function reset() {
    const squares = container.querySelectorAll('.square');
    squares.forEach(square => square.remove());

}
