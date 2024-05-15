window.addEventListener("DOMContentLoaded", game);

var shields;
var purchases = [];
var numberOfShields;
var orbitRadius;

var playerch;
var playervalue;
var baseskin;
var asteroidskin;
var turretskin;
var shieldskin;
var shardskin;

function addPurchaseToArray(number,skinType, price, imageVariable, isPurchasedVariable) {
    purchases.push({
        num: number,
        type: skinType,
        price: price,
        image: imageVariable,
        isPurchased: isPurchasedVariable
    });
}

function generatePurchaseButtons() {
    const choiceContainer = document.getElementById('choice');
    choiceContainer.innerHTML = '';  
    purchases.forEach((purchase, index) => {
        const button = document.createElement('button');
        button.className = 'btn btn-secondary';
        button.style.display = 'block';
        button.style.margin = '10px';
        
        const displayPrice = purchase.isPurchased ? '-' : purchase.price;
        button.innerHTML = `<img src="${purchase.image.src}" alt="${purchase.type}" style="width: 50px; height: auto;"> ${displayPrice}`;

        button.onclick = function() {
            playerch = index;  
        };

        choiceContainer.appendChild(button);
    });
}

function handlePurchase() {
    if (purchases[playerch]) {
        var purchase = purchases[playerch];
        if (!purchase.isPurchased && playervalue >= purchase.price) { 
            playervalue -= purchase.price;
            purchase.isPurchased = true;
            setSpriteVariation(purchase.type, purchase.num)
            updateUIAfterPurchase();
        } 
        else if (purchase.isPurchased)
        {
            setSpriteVariation(purchase.type, purchase.num)
            updateUIAfterPurchase();
        }
    } 
}

document.getElementById('Buy').addEventListener('click', handlePurchase);

function updateUIAfterPurchase() {
    saveVariables();
    generatePurchaseButtons(purchases);
    game();
}

function saveVariables() {
    localStorage.setItem('playervalue', playervalue);
    localStorage.setItem('baseskin', baseskin);
    localStorage.setItem('asteroidskin', asteroidskin);
    localStorage.setItem('turretskin', turretskin);
    localStorage.setItem('shieldskin', shieldskin);
    localStorage.setItem('shardskin', shardskin);
}

function loadVariables() {
    playervalue = localStorage.getItem('playervalue') || 0;
    baseskin = localStorage.getItem('baseskin') || 0;
    asteroidskin = localStorage.getItem('asteroidskin') || 0;
    turretskin = localStorage.getItem('turretskin') || 0;
    shieldskin = localStorage.getItem('shieldskin') || 0;
    shardskin = localStorage.getItem('shardskin') || 0;

    if (purchases.length === 0) {
        generatePurchase();
    }
}

var spriteShot = new Image();
var spriteSharddef = new Image();
var spriteTurretdef = new Image();
var spriteCoredef = new Image();
var spriteShielddef = new Image();
var spriteAst1def = new Image();
var spriteAst2def = new Image();
var spriteStart = new Image();
var spriteShardA = new Image();
var spriteShardB = new Image();
var spriteShardC = new Image();
var spriteTurretA = new Image();
var spriteTurretB = new Image();
var spriteTurretC = new Image();
var spriteCoreA = new Image();
var spriteCoreB = new Image();
var spriteCoreC = new Image();
var spriteShieldA = new Image();
var spriteShieldB = new Image();
var spriteShieldC = new Image();
var spriteAst1A = new Image();
var spriteAst2A = new Image();
var spriteAst1B = new Image();
var spriteAst2B = new Image();
var spriteAst1C = new Image();
var spriteAst2C = new Image();

const spritePaths = {
    spriteShot: '../images/shot.png',
    spriteShardA: '../images/shardA.png',
    spriteShardB: '../images/shardB.png',
    spriteShardC: '../images/shardC.png',
    spriteTurretA: '../images/turretA.png',
    spriteTurretB: '../images/turretB.png',
    spriteTurretC: '../images/turretC.png',
    spriteCoreA: '../images/coreA.png',
    spriteCoreB: '../images/coreB.png',
    spriteCoreC: '../images/coreC.png',
    spriteShieldA: '../images/shieldA.png',
    spriteShieldB: '../images/shieldB.png',
    spriteShieldC: '../images/shieldC.png',
    spriteAst1def: '../images/ast1A.png',
    spriteAst2def: '../images/ast2A.png',
    spriteAst1A: '../images/ast1A.png',
    spriteAst2A: '../images/ast1A.png',
    spriteAst1B: '../images/ast1B.png',
    spriteAst2B: '../images/ast2B.png',
    spriteAst1C: '../images/ast1C.png',
    spriteAst2C: '../images/ast2C.png',
    spriteStart: '../images/start.png'
};

spriteShardA.src = '../images/shardA.png';
spriteShardB.src = '../images/shardB.png';
spriteShardC.src = '../images/shardC.png';
spriteTurretA.src = '../images/turretA.png';
spriteTurretB.src = '../images/turretB.png';
spriteTurretC.src = '../images/turretC.png';
spriteCoreA.src = '../images/coreA.png';
spriteCoreB.src = '../images/coreB.png';
spriteCoreC.src = '../images/coreC.png';
spriteShieldA.src = '../images/shieldA.png';
spriteShieldB.src = '../images/shieldB.png';
spriteShieldC.src = '../images/shieldC.png';
spriteAst1A.src = '../images/ast1A.png';
spriteAst2A.src = '../images/ast1A.png';
spriteAst1B.src = '../images/ast1B.png';
spriteAst2B.src = '../images/ast2B.png';
spriteAst1C.src = '../images/ast1C.png';
spriteAst2C.src = '../images/ast2C.png';

function setSprites() {
    spriteShot.src = spritePaths.spriteShot;
    spriteStart.src = spritePaths.spriteStart;
    switch (parseInt(baseskin)) 
    {
        case 0:
            spriteCoredef.src = spritePaths.spriteCoreA;
            break;
        case 1:
            spriteCoredef.src = spritePaths.spriteCoreB;
            break;
        case 2:
            spriteCoredef.src = spritePaths.spriteCoreC;
            break;
    }
    switch (parseInt(asteroidskin)) 
    {
        case 0:
            spriteAst1def.src = spritePaths.spriteAst1A;
            spriteAst2def.src = spritePaths.spriteAst2A;
            spriteSharddef.src = spritePaths.spriteShardA;
            break;
        case 1:
            spriteAst1def.src = spritePaths.spriteAst1B;
            spriteAst2def.src = spritePaths.spriteAst2B;
            spriteSharddef.src = spritePaths.spriteShardB;
            break;
        case 2:
            spriteAst1def.src = spritePaths.spriteAst1C;
            spriteAst2def.src = spritePaths.spriteAst2C;
            spriteSharddef.src = spritePaths.spriteShardC;
            break;
    }
    switch (parseInt(turretskin)) 
    {
        case 0:
            spriteTurretdef.src = spritePaths.spriteTurretA;
            break;
        case 1:
            spriteTurretdef.src = spritePaths.spriteTurretB;
            break;
        case 2:
            spriteTurretdef.src = spritePaths.spriteTurretC;
            break;
    }
    switch (parseInt(shieldskin))
    {
        case 0:
            spriteShielddef.src = spritePaths.spriteShieldA;
            break;
        case 1:
            spriteShielddef.src = spritePaths.spriteShieldB;
            break;
        case 2:
            spriteShielddef.src = spritePaths.spriteShieldC;
            break;
    }
}

function setSpriteVariation(type, variation) {    
    switch (type) {
        case 'base':
            baseskin = variation;
            break;
        case 'asteroid':
            asteroidskin = variation;
            break;
        case 'turret':
            turretskin = variation;
            break;
        case 'shield':
            shieldskin = variation;
            break;
        default:
            console.log('Unknown sprite type or variation');
            break;
    }
}

function generatePurchase(){
    addPurchaseToArray('0','base', '10', spriteCoreA, false);
    addPurchaseToArray('1','base', '25', spriteCoreB, false);
    addPurchaseToArray('2','base', '50', spriteCoreC, false);
    addPurchaseToArray('0','asteroid', '10', spriteAst1A, false);
    addPurchaseToArray('1','asteroid', '25', spriteAst1B, false);
    addPurchaseToArray('2','asteroid', '50', spriteAst1C, false);
    addPurchaseToArray('0','shield', '10', spriteShieldA, false);
    addPurchaseToArray('1','shield', '25', spriteShieldB, false);
    addPurchaseToArray('2','shield', '50', spriteShieldC, false);    
    addPurchaseToArray('0','turret', '10', spriteTurretA, false);
    addPurchaseToArray('1','turret', '25', spriteTurretB, false);
    addPurchaseToArray('2','turret', '50', spriteTurretC, false);    
}

var canFire = true;
var cH = 0;
var cW = 0;

spriteShot.src = '../images/shot.png';

spriteShardA.src = '../images/shardA.png';
spriteShardB.src = '../images/shardB.png';
spriteShardC.src = '../images/shardC.png';

spriteTurretA.src = '../images/turretA.png';
spriteTurretB.src = '../images/turretB.png';
spriteTurretC.src = '../images/turretC.png';

spriteCoreA.src = '../images/coreA.png';
spriteCoreB.src = '../images/coreB.png';
spriteCoreC.src = '../images/coreC.png';

spriteShieldA.src = '../images/shieldA.png';
spriteShieldB.src = '../images/shieldB.png';
spriteShieldC.src = '../images/shieldC.png';

spriteAst1A.src = '../images/ast1A.png';
spriteAst2A.src = '../images/ast1A.png';
spriteAst1B.src = '../images/ast1B.png';
spriteAst2B.src = '../images/ast2B.png';
spriteAst1C.src = '../images/ast1C.png';
spriteAst2C.src = '../images/ast2C.png';

spriteStart.src = '../images/start.png';

var lastCursorX = cW / 2;
var lastCursorY = cH / 2;

export function loadScores() {
    return JSON.parse(localStorage.getItem('scores')) || [];
}

function displayPlayerValue() {
    const playerMoneyDiv = document.getElementById('playermoney');
    playerMoneyDiv.innerHTML = `Очки: ${playervalue}`;
}


function game() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        cH = ctx.canvas.height = window.innerHeight,
        cW = ctx.canvas.width = window.innerWidth ;
    var bullets = [],
        asteroids = [],
        destroyedAsteroids = 0,
        record = 0,
        count = 0,
        playing = false,
        gameOver = false,
        _planet = {deg: 0};
        shields = [];
        numberOfShields = 6;
        orbitRadius = 160;
    var player = {
        posX: -50,
        posY: -200,
        width: 300,
        height: 300,
        deg: 0
    };
    loadVariables();
    setSprites();
    generatePurchaseButtons();
    var shards = [];
    document.getElementById('saveButton').addEventListener('click', function() {
        saveScore(destroyedAsteroids, shields.length);
        game();
    });    
    canvas.addEventListener('click', action);
    canvas.addEventListener('mousemove', action);
    window.addEventListener("resize", update);
    window.addEventListener("keydown", function(event) {
        if (event.code === "Space") 
            {
            gameOver = true;
        }
        if (event.code === "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") 
            {
            playervalue = 0;
        }

    });
    
    function update() {
        cH = ctx.canvas.height = window.innerHeight;
        cW = ctx.canvas.width = window.innerWidth ;
    }
    
    function handleGameOver(e) {
        e.preventDefault();
        var dist;
        if (gameOver) {
            dist = Math.sqrt(((e.offsetX - cW/2) * (e.offsetX - cW/2)) + ((e.offsetY - (cH/2 + 45 + 22)) * (e.offsetY - (cH/2+ 45 + 22))));
            if (dist < 27) {
                if (e.type == 'click') {
                    gameOver = false;
                    count = 0;
                    bullets = [];
                    asteroids = [];
                    destroyedAsteroids = 0;
                    player.deg = 0;
                    canvas.removeEventListener('contextmenu', action);
                    canvas.style.cursor = "default";
                } else {
                    canvas.style.cursor = "pointer";
                }
            } else {
                canvas.style.cursor = "default";
            }
        } else {
            dist = Math.sqrt(((e.offsetX - cW/2) * (e.offsetX - cW/2)) + ((e.offsetY - cH/2) * (e.offsetY - cH/2)));
            if (dist < 27) {
                if (e.type == 'click') {
                    playing = true;
                    canvas.removeEventListener("mousemove", action);
                    canvas.addEventListener('contextmenu', action);
                    canvas.setAttribute("class", "playing");
                    canvas.style.cursor = "default";
                } else {
                    canvas.style.cursor = "pointer";
                }
            } else {
                canvas.style.cursor = "default";
            }
        }
    }
    

    function createBullet(e) {
        var bullet = {
            x: -25,
            y: -200,
            sizeX: 2,
            sizeY: 10,
            realX: 0,
            realY: 0,
            dirX: e.offsetX,
            dirY: e.offsetY,
            deg: player.deg,
            gridcell: calculateGridCell({ realX: e.offsetX, realY: e.offsetY }, grid)
        };
        bullets.push(bullet);
        canFire = false;
        setTimeout(function() {    canFire = true;    }, 750); 
    }
            
    function action(e) {
        if (playing && canFire) {
            createBullet(e);
        } else {
            handleGameOver(e);
        }
    }
        
    function moveBullet(bullet) {
        ctx.save();
        ctx.translate(cW / 2, cH / 2);
        ctx.rotate(bullet.deg);
        ctx.drawImage(spriteShot, bullet.x, bullet.y -= 20, 50, 50);
        ctx.restore();
        bullet.realX = (0) - (bullet.y + 10) * Math.sin(bullet.deg);
        bullet.realY = (0) + (bullet.y + 10) * Math.cos(bullet.deg);
        bullet.realX += cW / 2;
        bullet.realY += cH / 2;
    }
    
    function handleBulletCollision(bullet) {
        for (var j = 0; j < asteroids.length; j++) {
            var distance = Math.sqrt(Math.pow(asteroids[j].realX - bullet.realX, 2) + Math.pow(asteroids[j].realY - bullet.realY, 2));
            if (distance < (((asteroids[j].width / asteroids[j].size) / 2) - 4) + ((19 / 2) - 4)) {
                destroyedAsteroids += 1;
                playervalue = parseInt(playervalue) + 1;
                var k = random(3, 8);
                for (var i = 0; i < k; i++)
                {
                    var deg = random(0, 180);
                    createShard(asteroids[j].realX, asteroids[j].realY, deg);
                }
                asteroids.splice(j, 1);
                bullets.splice(bullets.indexOf(bullet), 1);
                return; 
            }
        }
    }
        

    function calculateGridCell(object, grid) {
        for (let i = 0; i < grid.length; i++) {
            const cell = grid[i];
            if (object.realX >= cell.x && object.realX <= cell.x + cell.size &&
                object.realY >= cell.y && object.realY <= cell.y + cell.size) {
                return i; 
            }
        }
        return -1;
    }
    
    
    function updateBullet() {
        for (var i = 0; i < bullets.length; i++) {
            moveBullet(bullets[i]);
            bullets[i].gridcell = calculateGridCell({ realX: bullets[i].realX, realY: bullets[i].realY }, grid);
            if (bullets[i].gridcell === -1) {
                bullets.splice(i, 1);
                i--;
            }
            handleBulletCollision(bullets[i]);
        }
    }
            
    function drawBaseShadow() {
        ctx.shadowBlur = 25;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowColor = "#999";
    }
    
    function drawBase() {
        ctx.save();
        drawBaseShadow();
        ctx.beginPath();
        ctx.arc((cW/2), (cH/2), 100, 0, Math.PI * 2);
        ctx.fill();
        ctx.translate(cW/2, cH/2);
        ctx.rotate((_planet.deg += 0.1) * (Math.PI / 180));
        ctx.drawImage(spriteCoredef, 0, 0, 150, 150, -100, -100, 200, 200);
        ctx.restore();
    }
    
    function drawTurret() {
        ctx.save();
        ctx.translate(cW/2,cH/2);
        ctx.rotate(player.deg);
        ctx.drawImage(spriteTurretdef, 0, 0, player.width, player.height, player.posX, player.posY, 100, 100);
        ctx.restore();
    }
    
    function drawReloadLine() {
        ctx.save();
        ctx.translate(cW/2,cH/2);
        ctx.rotate(player.deg);
        
        var turretTopX = player.posX + 50; 
        var turretTopY = player.posY;
        var lineLength = 75; 
        if (canFire)
        {
            var lineLength = 75; 
        }
        else
        {
            var lineLength = 65; 
        }

        ctx.beginPath();
        ctx.moveTo(turretTopX, turretTopY);
        ctx.lineTo(turretTopX, turretTopY - lineLength);
        if (canFire)
        {
            ctx.strokeStyle = 'green'; 
        }
        else
        {
            ctx.strokeStyle = 'darkred'; 
        }
        ctx.lineWidth = 2; 
        ctx.stroke();
        
        ctx.restore();
    }
        
    function moveTurret(cursorX, cursorY) {
        var newDeg = Math.atan2(cursorX - (cW/2), -(cursorY - (cH/2)));
        var maxRotationSpeed = 0.04; 
        var angleDifference = newDeg - player.deg;
        if (Math.abs(angleDifference) > Math.PI) {
            angleDifference = newDeg > player.deg ? newDeg - (player.deg + 2 * Math.PI) : (newDeg + 2 * Math.PI) - player.deg;
        }
        if (Math.abs(angleDifference) > maxRotationSpeed) {
            if (angleDifference > 0) {
                player.deg += maxRotationSpeed;
            } else {
                player.deg -= maxRotationSpeed;
            }
        } else {
            player.deg = newDeg;
        }
    }
    
function createAsteroid(type, coordsX, coordsY, deg) {
    var newAsteroid = {
        x: 0,
        y: 0,
        state: 0,
        stateX: 0,
        width: 300,
        height: 300,
        realX: coordsX,
        realY: coordsY,
        moveY: 0,
        coordsX: coordsX,
        coordsY: coordsY,
        size: random(2, 4),
        deg: deg,
        image: 0,
        gridcell: calculateGridCell({ realX: (coordsX / 100) * 90, realY: (coordsY / 100) * 90 }, grid)
    };
    newAsteroid.Image = random(1, 2);
    asteroids.push(newAsteroid);
}

function createShard(coordsX, coordsY, deg) {
    var newShard = {
        x: 0,
        y: 0,
        state: 0,
        stateX: 0,
        width: 300,
        height: 300,
        realX: coordsX,
        realY: coordsY,
        moveY: 0,
        speed: random(1, 4),
        coordsX: coordsX,
        coordsY: coordsY,
        size: random(2, 4),
        deg: deg,
        image: 0,
        gridcell: calculateGridCell({ realX: (coordsX / 100) * 90, realY: (coordsY / 100) * 90 }, grid)
    };
    newShard.Image = spriteSharddef;
    shards.push(newShard);
}

    
    function spawnAsteroid() {
        var type = random(1, 4),
            coordsX,
            coordsY,
            deg;
    
        switch (type) {
            case 1:
                coordsX = random(0, cW);
                coordsY = 0 - 150;
                deg = random(90, 270);
                break;
            case 2:
                coordsX = cW + 150;
                coordsY = random(0, cH);
                deg = random(180, 360);
                break;
            case 3:
                coordsX = random(0, cW);
                coordsY = cH + 150;
                deg = random(0, 90) || random(270, 360);
                break;
            case 4:
                coordsX = 0 - 150;
                coordsY = random(0, cH);
                deg = random(0, 180);
                break;
        }
    
        createAsteroid(type, coordsX, coordsY, deg);
    }
    

    initializeShields(numberOfShields, orbitRadius, spriteShielddef, shields);
    
    function updateAsteroids() {
        for (var i = 0; i < asteroids.length; i++) {
            asteroidMovement(asteroids[i]);
            asteroids[i].gridcell = calculateGridCell({ realX: asteroids[i].realX, realY: asteroids[i].realY }, grid);
            if (asteroids[i].gridcell === -1) {
                asteroids.splice(i, 1);
                i--;
            }
            handleAsteroidCollision(asteroids[i]);
        }
        handleAsteroidSpawn();
    }

    function updateShards() {
        for (var i = 0; i < shards.length; i++) {
            shardMovement(shards[i]);
            shards[i].gridcell = calculateGridCell({ realX: shards[i].realX, realY: shards[i].realY }, grid);
            if (shards[i].gridcell === -1) {
                shards.splice(i, 1);
                i--;
            }
        }
    }

    function drawLinesToAsteroids() {
        for (var j = 0; j < asteroids.length; j++) {
            var asteroid = asteroids[j];
            var distance = Math.sqrt(Math.pow(asteroid.realX - cW / 2, 2) + Math.pow(asteroid.realY - cH / 2, 2));
            var opacity = 1 - (distance / (cW / 2)); 
            opacity = opacity > 0.1 ? opacity : 0.1; 
            var red = Math.round(255 * (1 - distance / (cW / 2)));
            var green = red;
            var blue = red;
            ctx.beginPath();
            ctx.moveTo(cW / 2, cH / 2);
            ctx.lineTo(asteroid.realX, asteroid.realY);
            ctx.strokeStyle = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + opacity + ')';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }
                        
    function asteroidMovement(asteroid) {
            ctx.save();
            ctx.translate(asteroid.coordsX, asteroid.coordsY);
            ctx.rotate(asteroid.deg);
            switch (asteroid.Image) {
                case 1:
                    ctx.drawImage(spriteAst1def, asteroid.x, asteroid.y, asteroid.width, asteroid.height, -(asteroid.width / asteroid.size) / 2, asteroid.moveY += 1 / (asteroid.size), asteroid.width / asteroid.size, asteroid.height / asteroid.size);
                    break;
                case 2:
                    ctx.drawImage(spriteAst2def, asteroid.x, asteroid.y, asteroid.width, asteroid.height, -(asteroid.width / asteroid.size) / 2, asteroid.moveY += 8 / (asteroid.size), asteroid.width / asteroid.size, asteroid.height / asteroid.size);
                    break;
            }
            ctx.restore();
            asteroid.realX = (0) - (asteroid.moveY + ((asteroid.height / asteroid.size) / 2)) * Math.sin(asteroid.deg);
            asteroid.realY = (0) + (asteroid.moveY + ((asteroid.height / asteroid.size) / 2)) * Math.cos(asteroid.deg);
            asteroid.realX += asteroid.coordsX;
            asteroid.realY += asteroid.coordsY;
    }

    function shardMovement(shard) {
        ctx.save();
        ctx.translate(shard.coordsX, shard.coordsY);
        ctx.rotate(shard.deg);
        ctx.drawImage(spriteSharddef, shard.x, shard.y, shard.width, shard.height, -(shard.width / shard.size) / 2, shard.moveY += shard.speed / (shard.size), shard.width / shard.size, shard.height / shard.size);
        ctx.restore();
        shard.realX = (0) - (shard.moveY + ((shard.height / shard.size) / 2)) * Math.sin(shard.deg);
        shard.realY = (0) + (shard.moveY + ((shard.height / shard.size) / 2)) * Math.cos(shard.deg);
        shard.realX += shard.coordsX;
        shard.realY += shard.coordsY;
}

function handleAsteroidCollision(asteroid) {
    try {
        var distance = Math.sqrt(Math.pow(asteroid.realX - cW / 2, 2) + Math.pow(asteroid.realY - cH / 2, 2));
        for (var i = 0; i < shields.length; i++) {
            var shield = shields[i];
            var shieldDistance = Math.sqrt(Math.pow(asteroid.realX - shield.x, 2) + Math.pow(asteroid.realY - shield.y, 2));
            if (shieldDistance < (((asteroid.width / asteroid.size) / 2) - 4) * 1 + ((spriteShielddef.width / 4) - 4) * 0.5) {
                destroyedAsteroids++;
                var k = random(3, 8);
                for (var l = 0; l < k; l++) {
                    var deg = random(0, 180);
                    createShard(asteroid.realX, asteroid.realY, deg);
                }
                asteroids.splice(asteroids.indexOf(asteroid), 1);
                shields.splice(i, 1);
                break;
            }
        }
        if (distance < (((asteroid.width / asteroid.size) / 2) - 4) + 100) {
            gameOver = true;
            playing = false;
            canvas.addEventListener('mousemove', action);
        }
    } catch (error) {
        const index = asteroids.indexOf(asteroid);
        if (index !== -1) {
            asteroids.splice(index, 1);
        }
    }
}
    
    function createGrid() {
        const gridSizeX = 30; 
        const gridSizeY = 30; 
        const cellSize = 100;
        const centerX = window.innerWidth / 2; 
        const centerY = window.innerHeight / 2;
        const grid = [];
        const startX = centerX - (gridSizeX / 2) * cellSize;
        const startY = centerY - (gridSizeY / 2) * cellSize;
            for (let i = 0; i < gridSizeY; i++) {
            for (let j = 0; j < gridSizeX; j++) {
                const x = startX + j * cellSize;
                const y = startY + i * cellSize;
                const cell = {
                    x: x,
                    y: y,
                    size: cellSize
                };
                grid.push(cell);
            }
        }
    
        return grid;
    }
    
    function drawGrid() {
        ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
        ctx.lineWidth = 2;
        for (let i = 0; i < grid.length; i++) {
            ctx.beginPath();
            ctx.rect(grid[i].x, grid[i].y, grid[i].size, grid[i].size);
            ctx.stroke();
        }
    }
    
    const grid = createGrid();
    
    function handleAsteroidSpawn() {
        if (asteroids.length < 50) {
            spawnAsteroid();
        }
    }                    
    
    function showGameOverScreen() {
        saveVariables();
        showGameOverModal(destroyedAsteroids, shields.length);
    }                        

    function showGameOverModal(destroyed, shieldsLeft) {
        document.getElementById('destroyed').textContent = destroyed;
        document.getElementById('shieldsLeft').textContent = shieldsLeft;
        document.getElementById('gameOverModal').style.display = 'block';
    }

    function start() {
        if (!gameOver) {
            ctx.clearRect(0, 0, cW, cH);
            ctx.beginPath();
            drawGrid(); 
            drawLinesToAsteroids();
            drawBase();
            drawShields(shields, cW, cH, ctx, orbitRadius, spriteShielddef);
            drawTurret();
            drawReloadLine();
            displayPlayerValue();
            if (playing) {
                updateAsteroids();
                updateShards();
                updateBullet();
                moveTurret(lastCursorX, lastCursorY);

            } else {
                ctx.drawImage(spriteStart, 0, 0, 150, 150, cW / 2 - 60, cH / 2 - 60, 120, 120);
            }
        } else if (count < 1) {
            count = 1;
            showGameOverScreen();
        }
    }

    function init() {
        window.requestAnimationFrame(init);
        canvas.addEventListener('mousemove', function(event) {
            lastCursorX = event.offsetX;
            lastCursorY = event.offsetY;
        });
        start();
    }
    init();

    if(~window.location.href.indexOf('full')) {
        var full = document.getElementsByTagName('a');
        full[0].setAttribute('style', 'display: none');
    }
}


function drawShields(shields, cW, cH, ctx, orbitRadius, spriteShield) {
    var desiredAngle = ((2 * Math.PI) / shields.length) ;
    shields.forEach((shield, index) => {
        shield.angle += shield.angleSpeed;
        shield.x = cW / 2 + orbitRadius * Math.cos(shield.angle);
        shield.y = cH / 2 + orbitRadius * Math.sin(shield.angle);
        var idealAngle = index * desiredAngle;
        if (shields.length > 1) {
            let angleDifference = idealAngle - shield.angle;
            angleDifference = (angleDifference + Math.PI) % (2 * Math.PI) - Math.PI;
            shield.angleSpeed += angleDifference * 0.0001;
        }
        ctx.save();
        ctx.translate(shield.x, shield.y);
        ctx.rotate(shield.angle + Math.PI / 2);
        ctx.drawImage(spriteShield, -spriteShield.width / 4, -spriteShield.height / 4, spriteShield.width / 2, spriteShield.height / 2);
        ctx.restore();
    });
}


function initializeShields(numberOfShields, orbitRadius, spriteShield, shields) {
    for (let i = 0; i < numberOfShields; i++) {
        shields.push({
            angle: (Math.PI * 2 / numberOfShields) * i,
            angleSpeed: 0.005,
            image: spriteShield,
            x: 0,
            y: 0
        });
            }
}

function random(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

function saveScore(destroyedF, shieldsLeft) {
    let scores = JSON.parse(localStorage.getItem('scores')) || []; 
    let playerName = document.getElementById('nickname').value;
    var score = {
        scoredestroyed: destroyedF,
        scoresr: shieldsLeft,
        place: 0, 
        name: playerName 
    };
    scores.push(score);
    sortScores(scores); 
    localStorage.setItem('scores', JSON.stringify(scores));
    document.getElementById('gameOverModal').style.display = 'none';
}

function clearScores() {
    localStorage.removeItem('scores');
}

export function sortScores(scores) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < scores.length - 1; i++) {
            if (scores[i].scoredestroyed !== scores[i + 1].scoredestroyed) {
                if (scores[i].scoredestroyed < scores[i + 1].scoredestroyed) {
                    const temp = scores[i];
                    scores[i] = scores[i + 1];
                    scores[i + 1] = temp;
                    sorted = false;
                }
            } else {
                if (scores[i].shieldsremain < scores[i + 1].shieldsremain) {
                    const temp = scores[i];
                    scores[i] = scores[i + 1];
                    scores[i + 1] = temp;
                    sorted = false;
                }
            }
        }
    }
    scores.forEach((score, index) => {
        score.place = index + 1;
    });
}

export function createLeaderboardButtons(scores) {
    const asd = document.getElementById('asd');
    asd.innerHTML = '';
    scores.forEach((score) => {
        const button = document.createElement('button');
        button.textContent = `Место ${score.place}`;
        button.className = 'btn btn-primary';
        button.onclick = () => {
            displayScoreModal(score);
        };
        asd.appendChild(button);
    });
}

export function displayScoreModal(score) {
    const scoreModal = document.getElementById('scoreModal');
    const nameSpan = document.getElementById('name');
    const placeSpan = document.getElementById('place');
    const destroyedSpan = document.getElementById('ddd');
    const shieldsLeftSpan = document.getElementById('sss');
    nameSpan.textContent = score.name;
    placeSpan.textContent = score.place; 
    destroyedSpan.textContent = score.scoredestroyed;
    shieldsLeftSpan.textContent = score.scoresr; 
    scoreModal.style.display = 'block';
    const backButton = document.getElementById('backbutton');
    backButton.addEventListener('click', function() {
        scoreModal.style.display = 'none'; 
    });
}
