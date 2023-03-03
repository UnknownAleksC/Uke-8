let playerPokemons = [
    {
        partyNum: 1,
        pokemonName: 'Flareon',
        level: 1,
        exp: 0,
        maxHp: 25,
        currentHp: 25,
        baseDamage: 5,
        bonusDamage: 0,
        defense: 0,
        element: ['Fire'],
        weakness: ['Water', 'Ground', 'Rock']
    },
    {
        partyNum: 2,
        pokemonName: 'Jolteon',
        level: 1,
        exp: 0,
        maxHp: 25,
        currentHp: 25,
        baseDamage: 5,
        bonusDamage: 0,
        defense: 0,
        element: ['Electric'],
        weakness: ['Ground']
    },
    {
        partyNum: 3,
        pokemonName: 'Leafeon',
        level: 1,
        exp: 0,
        maxHp: 25,
        currentHp: 25,
        baseDamage: 5,
        bonusDamage: 0,
        defense: 0,
        element: ['Grass'],
        weakness: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug']
    },
    {
        partyNum: 4,
        pokemonName: 'Vaporeon',
        level: 1,
        exp: 0,
        maxHp: 25,
        currentHp: 25,
        baseDamage: 5,
        bonusDamage: 0,
        defense: 0,
        element: ['Water'],
        weakness: ['Grass', 'Electric']
    },
    {
        partyNum: 5,
        pokemonName: 'Umbreon',
        level: 1,
        exp: 0,
        maxHp: 25,
        currentHp: 25,
        baseDamage: 5,
        bonusDamage: 0,
        defense: 0,
        element: ['Dark'],
        weakness: ['Fighting', 'Bug', 'Fairy']
    },
    {
        partyNum: 6,
        pokemonName: 'Glaceon',
        level: 1,
        exp: 0,
        maxHp: 25,
        currentHp: 25,
        baseDamage: 5,
        bonusDamage: 0,
        defense: 0,
        element: ['Ice'],
        weakness: ['Fire', 'Fighting', 'Rock', 'Steel']
    }
];

let opponentPokemons = [
    {
        partyNum: 0,
        pokemonName: 'Ferrothorn',
        level: 1,
        maxHp: 25,
        currentHp: 25,
        baseDamage: 5,
        bonusDamage: 0,
        defense: 0,
        element: ['Grass', 'Steel'],
        weakness: ['Fire', 'Fighting']
    },
    {
        partyNum: 1,
        pokemonName: 'Skarmory',
        level: 1,
        maxHp: 25,
        currentHp: 25,
        baseDamage: 5,
        bonusDamage: 0,
        defense: 0,
        element: ['Steel', 'Flying'],
        weakness: ['Electric']
    },
    {
        partyNum: 2,
        pokemonName: 'Heatran',
        level: 1,
        maxHp: 25,
        currentHp: 25,
        baseDamage: 5,
        bonusDamage: 0,
        defense: 0,
        element: ['Fire', 'Steel'],
        weakness: ['Ground', 'Water']
    },
    {
        partyNum: 3,
        pokemonName: 'Gyarados',
        level: 1,
        maxHp: 25,
        currentHp: 25,
        baseDamage: 5,
        bonusDamage: 0,
        defense: 0,
        element: ['Water', 'Flying'],
        weakness: ['Electric', 'Rock']
    },
    {
        partyNum: 4,
        pokemonName: 'Tyranitar',
        level: 1,
        maxHp: 25,
        currentHp: 25,
        baseDamage: 5,
        bonusDamage: 0,
        defense: 0,
        element: ['Rock', 'Dark'],
        weakness: ['Fighting', 'Ground', 'Fairy', 'Steel']
    },
    {
        partyNum: 5,
        pokemonName: 'Dragonite',
        level: 1,
        maxHp: 25,
        currentHp: 25,
        baseDamage: 5,
        bonusDamage: 0,
        defense: 0,
        element: ['Dragon', 'Flying'],
        weakness: ['Ice', 'Dragon', 'Rock', 'Fairy']
    }
];

const mainDiv = document.getElementById('app');

updateBattle();
function updateBattle(playerNum, opponentNum) {
    if (!playerNum) playerNum = 0;
    if (!opponentNum) opponentNum = 0;
    let playerPokemon = playerPokemons[playerNum];
    let opponentPokemon = opponentPokemons[opponentNum];
    mainDiv.innerHTML = `
    <h3>You</h3>

    <div>「${playerPokemon.pokemonName} - Lvl.${playerPokemon.level}」</div>
    <div>「HP: ${playerPokemon.currentHp} / ${playerPokemon.maxHp}」</div>
    <div>「Type/${playerPokemon.element}」</div>
    </br>
    <button onclick="attack(true, ${playerNum}, ${opponentNum})">Attack</button>
    <button>Defend</button>
    <button onclick="pickNewPokemon(${playerNum}, ${opponentNum})">Pokemon</button>
    <button>Run</button>
    </br>
    </br>
    </br>
    <h3>Enemy</h3>
    <div>「${opponentPokemon.pokemonName} - Lvl.${opponentPokemon.level}」</div>
    <div>「HP: ${opponentPokemon.currentHp} / ${opponentPokemon.maxHp}」</div>
    <div>「Type/${opponentPokemon.element}」</div>
    `
}

function pickNewPokemon(previousPokemon, opponentNum) {
    mainDiv.innerHTML = `Change pokemon!`
    for (let partySpot = 0; partySpot < playerPokemons.length; partySpot++) {
        if (partySpot === previousPokemon) {
            mainDiv.innerHTML += `
                <div>
                「${playerPokemons[partySpot].pokemonName} - Lvl.${playerPokemons[partySpot].level}」- Previous Pokemon
                </div>
            `;
        }
        else {
            mainDiv.innerHTML += `
                <div class="pokemonSelect" onclick="changePokemon(${partySpot}, ${opponentNum}, true)">
                「${playerPokemons[partySpot].pokemonName} - Lvl.${playerPokemons[partySpot].level}」
                </div>
            `}
    }
}

function changePokemon(playerNum, opponentNum, playerTurn) {
    if (playerTurn) {
        updateBattle(playerNum, opponentNum, 'newPokemon');
    }
}

function attack(playerTurn, attackNum, defendNum) {
    let attacker = playerPokemons[attackNum];
    let defender = opponentPokemons[defendNum];
    let damage = attacker.baseDamage;
    let multiplier = 1;
    if (playerTurn) {
        for (let i = 0; i < 2; i++) {
            let elemCheck = defender;
            let weakCheck = attacker;
            if (i === 1) { elemCheck = attacker; weakCheck = defender; };
            for (let attackIndex = 0; attackIndex < elemCheck.element.length; attackIndex++) {
                multiplier = () => {
                    for (let defenseIndex = 0; defenseIndex < weakCheck.weakness.length; defenseIndex++) {
                        if (elemCheck === attacker && elemCheck.element[attackIndex] === weakCheck.weakness[defenseIndex]) return 2;
                        else if (elemCheck === defender && elemCheck.element[attackIndex] === weakCheck.weakness[defenseIndex]) return 0.5;
                    }
                    return 1;
                };
            };
        };
        damage = multiplier = 2 ? damage * 2 : multiplier = 0.5 ? damage * 0.5 : damage;
        damage += (Math.floor(Math.random() * ((4 + (2 * attacker.level)) - 1)) - (2 * attacker.level));
        defender.currentHp -= damage;
    };
    console.log(damage);
    updateBattle(attackNum, defendNum);
}

