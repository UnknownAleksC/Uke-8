// Denne oppgaven ble mer en lærings prossess istedenfor egen løsning. Var mange deler jeg ikke forsto
// Har prøvd å få inn litt av mitt eget og for hva oppgavene spurte om

// MODEL
// Åsen den første mazen skal se ut, gitt av oppgaven. 
var mazeModel = {
    size: 2,
    rows: [
        [
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        ],
        [
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
        ],
        [
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        ],
        [
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
        ],
        [
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        ],
    ]
};

// VIEW
updateView();
function updateView() {
    const mainApp = document.getElementById('app');
    // Under blir tablet laget ved hjelp av map og anonyme funksjoner (også kalt lambda funksjon). 
    mainApp.innerHTML = `
    <table>
        ${mazeModel.rows.map((row, rowIndex) => `
        <tr>
            ${row.map((col, colIndex) => `
            <td onclick="toggle(${rowIndex}, ${colIndex})" class="${addCssClasses(col, colIndex, rowIndex)}">
            </td>
            `).join('')}
        </tr>
        `).join('')}
    </table>
    `;
}

// CONTROLLER
function initModel(mazeSize) {
    mazeModel.size = mazeSize;
    mazeModel.rows = [];
    for (let rowIndex = 0; rowIndex < mazeSize; rowIndex++) {
        mazeModel.rows.push(createRow(mazeSize, false));
        mazeModel.rows.push(createRow(mazeSize, true));
    }
    mazeModel.rows.push(createRow(mazeSize, false));
    updateView();
}

function createRow(mazeSize, isHigh) {
    let row = [];
    for (let colIndex = 0; colIndex < mazeSize; colIndex++) {
        row.push(createCell(isHigh, false));
        row.push(createCell(isHigh, true));
    }
    row.push(createCell(isHigh, false));
    return row;
}

function createCell(isHigh, isWide) {
    if (isHigh === isWide) return { isHigh, isWide };
    const isOpen = false;
    return { isHigh, isWide, isOpen };
}

// function initModel(mazeSize) {
//     mazeModel.size = mazeSize.value;
//     mazeModel.rows = [];
//     for (let rowIndex = 0; rowIndex < mazeModel.size; rowIndex++) {
//         mazeModel.rows[rowIndex].push(!isHigh, !isWide);
//         mazeModel.rows[rowIndex].push(isHigh, !isWide);
//     }
//     mazeModel.rows[rowIndex].push(!isHigh, !isWide);
// }

function addCssClasses(cell, colIndex, rowIndex) {
    // Her bli hver cell i tablet gitt klasser basert på variablene gitt i objektet ved hjelp av ternary operators.
    if (!cell.isHigh && !cell.isWide) return 'corner ';
    if (cell.isHigh && cell.isWide) return 'room ';
    // De tre neste radene la jeg til selv for å få de yterste veggene til å ikke synes
    // if (rowIndex === 0 || rowIndex === mazeModel.size * 2 && mazeModel.rows[rowIndex][colIndex].isOpen === true) return 'entranceAndExit ';
    if (rowIndex === 0 || rowIndex === mazeModel.size * 2 && colIndex % 2 === 1) return 'outerWallHorizontal ';
    if (colIndex === 0 || colIndex === mazeModel.size * 2 && rowIndex % 2 === 1) return 'outerWallVertical ';
    let highOrLow = cell.isHigh ? 'high ' : 'low ';
    let wideOrNarrow = cell.isWide ? 'wide ' : 'narrow ';
    let openOrClosed = cell.isOpen ? 'noWall ' : 'wall ';
    return highOrLow + wideOrNarrow + openOrClosed;
}

function toggle(row, col) {
    console.log('test');
    let cellToggle = mazeModel.rows[row][col];
    cellToggle.isOpen = !cellToggle.isOpen;
    updateView();
}