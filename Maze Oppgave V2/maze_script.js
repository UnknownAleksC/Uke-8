// MODEL
var mazeModel = {
    size: 5,
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
    mainApp.innerHTML = `
    <table>
        ${mazeModel.rows.map((row, rowIndex) => `
        <tr>
            ${row.map((col, colIndex) => `
            <td onclick="toggle(${rowIndex}, ${colIndex})" class="${addCssClasses(col)}">
            </td>
            `).join('')}
        </tr>
        `).join('')}
    </table>
    `;
}

// CONTROLLER
function initModel(mazeSize) {
    mazeModel.size = mazeSize.value * 2 + 1;
    mazeModel.rows = [];
    for (let rowIndex = 0; rowIndex < mazeModel.size; rowIndex++) {
        for (let colIndex = 0; colIndex < mazeModel.size; colIndex++) {
            if (colIndex % 2 === 0) {
                mazeModel.rows[row][colIndex].push(!isHigh, !isWide)
                mazeModel.rows[row][colIndex].push(!isHigh, isWide)
            }
            else {
                mazeModel.rows[row][colIndex].push(isHigh, !isWide)
                mazeModel.rows[row][colIndex].push(isHigh, isWide)
            }
            mazeModel.rows[row][colIndex].push()
        };
    };
}

function addCssClasses(cell) {
    if (!cell.isHigh && !cell.isWide) return 'corner ';
    if (cell.isHigh && cell.isWide) return 'room ';
    let highOrLow = cell.isHigh ? 'high ' : 'low ';
    let wideOrNarrow = cell.isWide ? 'wide ' : 'narrow ';
    let openOrClosed = cell.isOpen ? 'noWall ' : 'wall ';
    return highOrLow + wideOrNarrow + openOrClosed;
}

function toggle(row, col) {
    let cellToggle = mazeModel.rows[row][col]
    if (cellToggle.isOpen = undefined) return;
    cellToggle.isOpen = !cellToggle.isOpen;
    updateView();
}