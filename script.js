const characters = [
    "Baby Mario",
    "Baby Luigi",
    "Baby Peach",
    "Baby Daisy",
    "Toad",
    "Toadette",
    "Koopa Troopa",
    "Dry Bones",
    "Mario",
    "Luigi",
    "Peach",
    "Daisy",
    "Yoshi",
    "Birdo",
    "Diddy Kong",
    "Bowser Jr.",
    "Wario",
    "Waluigi",
    "Donkey Kong",
    "Bowser",
    "King Boo",
    "Rosalina",
    "Funky Kong",
    "Dry Bowser"
]

const light = [
    "Standard Kart S",
    "Booster Seat (Baby Booster)",
    "Mini Beast (Concerto)",
    "Cheep Charger",
    "Tiny Titan (Rally Romper)",
    "Blue Falcon",
    "Standard Bike S",
    "Bullet Bike",
    "Bit Bike",
    "Quacker",
    "Magikruiser",
    "Jet Bubble (Bubble Bike)"
]

const medium = [
    "Standard Kart M",
    "Classic Dragster (Nostalgia 1)",
    "Wild Wing",
    "Super Blooper (Turbo Blooper)",
    "Daytripper (Royal Racer)",
    "Sprinter (B Dasher Mk. 2)",
    "Standard Bike M",
    "Mach Bike",
    "Sugarscoot (Bon Bon)",
    "Zip Zip (Rapide)",
    "Sneakster (Nitrocycle)",
    "Dolphin Dasher"
]

const heavy = [
    "Standard Kart L",
    "Offroader",
    "Flame Flyer",
    "Piranha Prowler",
    "Jetsetter (Aero Glider)",
    "Honeycoupe (Dragonetti)",
    "Standard Bike L",
    "Flame Runner (Bowser Bike)",
    "Wario Bike",
    "Shooting Star (Twinkle Star)",
    "Spear (Torpedo)",
    "Phantom"
]

const n_light = [
    "Standard Kart S",
    "Booster Seat (Baby Booster)",
    "Mini Beast (Concerto)",
    "Cheep Charger",
    "Tiny Titan (Rally Romper)",
    "Blue Falcon",
    "Standard Bike S",
    "Bit Bike",
    "Quacker",
    "Magikruiser",
    "Jet Bubble (Bubble Bike)"
]

const n_medium = [
    "Standard Kart M",
    "Classic Dragster (Nostalgia 1)",
    "Wild Wing",
    "Super Blooper (Turbo Blooper)",
    "Daytripper (Royal Racer)",
    "Sprinter (B Dasher Mk. 2)",
    "Standard Bike M",
    "Sugarscoot (Bon Bon)",
    "Zip Zip (Rapide)",
    "Sneakster (Nitrocycle)",
    "Dolphin Dasher"
]

const n_heavy = [
    "Standard Kart L",
    "Offroader",
    "Flame Flyer",
    "Piranha Prowler",
    "Jetsetter (Aero Glider)",
    "Honeycoupe (Dragonetti)",
    "Standard Bike L",
    "Wario Bike",
    "Shooting Star (Twinkle Star)",
    "Spear (Torpedo)",
    "Phantom"
]

const tableDiv = document.getElementById("forTable");

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const generateHeader = (players, chars) => {
    let initHtml = "<tr>";
    if (players) {
        initHtml += `<th>Player Name</th>`;
    }
    if (chars) {
        initHtml += `<th>Character</th>`;
    }
    return initHtml + "<th>Vehicle</th></tr>"
}

const generateRow = (players, playerNum, chars, charNum, vehicleNum, topTier) => {
    let initHtml = "<tr>";
    if (players) {
        initHtml += `<td><input type="text" id="player${playerNum}" name="player${playerNum}"></td>`;
    }
    if (chars) {
        initHtml += `<td>${characters[charNum]}</td>`
    }
    if (topTier) {
        if (charNum < 8) {
            initHtml += `<td>${light[vehicleNum]}</td></tr>`;
        } else if (charNum < 16) {
            initHtml += `<td>${medium[vehicleNum]}</td></tr>`;
        } else {
            initHtml += `<td>${heavy[vehicleNum]}</td></tr>`;
        }
    } else {
        if (charNum < 8) {
            initHtml += `<td>${n_light[vehicleNum]}</td></tr>`;
        } else if (charNum < 16) {
            initHtml += `<td>${n_medium[vehicleNum]}</td></tr>`;
        } else {
            initHtml += `<td>${n_heavy[vehicleNum]}</td></tr>`;
        }
    }
    return initHtml;
}

const doShit = () => {
    let htmlTable = "<table>";
    let players = false;
    let chars = true;
    if (document.getElementById("pnames").checked) {
        console.log("yes player names");
        players = true;
    }
    if (document.getElementById("nochar").checked) {
        console.log("no characters");
        chars = false;
    }
    htmlTable += generateHeader(players, chars);
    for (let i = 0; i < document.getElementById("quantity").value; i++) {
        if (document.getElementById("toptier").checked) {
            console.log("no top tiers");
            htmlTable += generateRow(players, i, chars, getRandomInt(24), getRandomInt(11), false);
        } else {
            htmlTable += generateRow(players, i, chars, getRandomInt(24), getRandomInt(12), true);
        }
    }
    htmlTable += "</table>"
    tableDiv.insertAdjacentHTML("beforeend", htmlTable);
}