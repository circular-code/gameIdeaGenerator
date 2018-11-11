var result = document.getElementById('result');

var button = document.getElementById('getResult');

var data = {
   genre: ['Platformer', 'EGO-Shooter', 'Shooter', 'Fighting', "Beat 'em up", 'Stealth', 'Survival', 'Rythm', 'Survival-Horror', 'Metroidvania', 'Text Adventure', 'Graphic Adventure', 'Interactive Movie', 'Action RP', 'MMORP', 'Roguelike', 'Tactical RP', 'Sandbox RP', 'Choices', 'Fantasy', 'Construction-Simulation', 'Management Simulation', 'Life Simulation', 'Vehicle Simulation', '4X', 'Artillery', 'Real Time Strategy', 'Real Time Tactics', 'MOBA', 'Tower Defense', 'Turn Based Strategy', 'Turn Based Tactics', 'Wargame', 'Grand stragety wargame', 'Racing', 'Sports', 'Competetive', 'Sports-based fighting', 'MMO', 'Casual', 'Party', 'Programming', 'Logic', 'Trivia', 'Board', 'Card', 'Idle', 'Serious', 'Educational'],
   setting: ['Island', 'Future', 'Outer Space', 'Park', 'City', 'Psychiatric Hospital', 'Prison', 'Desert', 'Under Water', 'Air', 'Floating Islands', 'Fantasy World', 'Under Water City', 'Space Station', 'Comet', 'Castle', 'Enchanted Forest', 'Swamp', 'Junk Yard', 'Outskirts', 'Caves', 'Village', 'Mexico', 'Temple', 'Church', 'Underworld', 'Heaven'],
   style: ['cell-shading', 'realistic 3D', 'pixel art', 'soft 3D', 'comic 3D', '3D', 'Block', 'Oldschool RPG', 'Abstract', 'Photorealism', 'Modified Realism'],
   mode: ['Team Death Match', 'Battle Royale', 'Capture the Flag', 'checkpoints', 'Domination', 'Waves', 'King of the Hill', 'Human vs Machine', 'Race'],
   players: ['Singleplayer', 'Multiplayer', 'Multiplayer-Collaboration', 'Co-Op']
};

function getGame() {

    var genre = data.genre[randomNumBetween(data.genre.length)],
    setting = data.setting[randomNumBetween(data.setting.length)],
    style = data.style[randomNumBetween(data.style.length)],
    mode = data.mode[randomNumBetween(data.mode.length)],
    players = data.players[randomNumBetween(data.players.length)];

    result.textContent = `"A ${players.toLowerCase()} ${genre.toLowerCase()} game in a ${setting.toLowerCase()}-setting realised in a ${style.toLowerCase()}-style featuring a ${mode.toLowerCase()} mode."`;
}

button.addEventListener('click', getGame);

function randomNumBetween (max, min) {
    if (typeof max === 'undefined'){
        console.log('max undefined');
        return false;
    }
    if (typeof min === 'undefined'){
        min = 0;
    }
    return Math.floor(Math.random()*(max-min)+min);
}

