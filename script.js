let circleTurn=true;
var container = document.getElementById('container');
let cells = document.querySelectorAll('.cell');
var currentCls;
var winP = document.getElementById('winPage');
var winner = document.getElementById('winner-name');
var restartButton = document.getElementById('restartbtn');
var Winning_Combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]



cells.forEach(cell => {
    cell.addEventListener('click', handleClicked, {once: true});  
});

function handleClicked (event) {
    console.log('clicked');

    if(circleTurn){
        console.log(event);
        event.target.innerText = "O";
        event.target.classList.add("Circle");
        container.classList.add("C");
        container.classList.remove("XXX");
        circleTurn = !circleTurn;
        console.log(circleTurn)
    }
    else{
        event.target.innerText= "X";
        event.target.classList.add("Cross");
        container.classList.add("XXX");
        container.classList.remove("C");
        circleTurn = !circleTurn;
    }
    event.target.classList.remove('unselected');
    if(checkWin())
    {
        if(currentClass() == 'Circle')
        winner.innerText = 'Player O';
        else
        winner.innerText = 'Player X';
        circleTurn = true;
        afterWin();
    }
}

const checkWin = () => {
    var current = currentClass();
    console.log(current);
    return Winning_Combinations.some(combination =>{
        return combination.every(index => {
            return cells[index].classList.contains(current);
        })
    })
}

const currentClass = () =>{
    var currentCls;
    if(container.classList.contains('C'))
        currentCls = "Circle";
    if(container.classList.contains('XXX'))
        currentCls = "Cross";
    return currentCls;    
}


const afterWin = () => {
    winP.style.display = 'flex';
    container.style.filter = 'blur(5px)';
}

const Restart = () =>{
    winP.style.display = 'none';
    cells.forEach(cell =>{
        cell.innerText = "";
    })
    container.style.filter = 'none';
}