const sudokuNumberList = 
[ 
    "31-48-925",
    "56------7",
    "24-73568-",
    "8-------9",
    "7-286----",
    "--4-512--",
    "----78-94",
    "4-----81-",
    "--51-----",

];

function createSudokuTiles()
{
    for(let y = 0; y < 9; y++)
    {
        for(let x = 0; x < 9; x++)
        {
            let tileContent = sudokuNumberList[y][x];
            let tileDiv = document.createElement("button");

            if (tileContent == "-")
            {
                tileContent = "";
                tileDiv.classList.add("tile-light")
            }

            else
            {
                tileDiv.classList.add("tile-dark")
            }

            if (x == 2 || x == 5)
            {
                tileDiv.classList.add("border-right");
            }

            if (y == 2 || y == 5)
            {
                tileDiv.classList.add("border-bottom");
            }

            tileDiv.classList.add("sudoku-tile");
            tileDiv.innerText = tileContent;
            let sudokuBox = document.getElementById("sudoku-box");
            sudokuBox.appendChild(tileDiv);
                

        }
    }
}
