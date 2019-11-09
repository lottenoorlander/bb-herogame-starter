// Write your JS here

/*hero Object*/
const hero = {
    name: "", 
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2
    }
}

/*monster objects */
const ogre = new Monster("ogre", 5, 1, "stick", "https://cdn.pixabay.com/photo/2019/08/11/23/22/orc-4400045_960_720.png");
const dragon = new Monster("dragon", 10, 3, "firebreath", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg/1020px-Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg");
const thief = new Monster("thief", 2, 2, "sword", "https://cdn.pixabay.com/photo/2018/04/10/01/22/thief-3306100_1280.png");
const banana = new Monster("rogue-banana", 1, 6, "bananapeel", "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg");
const monsters = [ogre, dragon, thief, banana];

/*rest function*/
function rest(person){
    if(person.health === 10){
        alert("You're already at full health")
    }
        person.health = 10;
        document.getElementById(`healthStat-${hero.name}`).innerHTML = `Health: 10`
        return person;
}


/*call rest function for hero when you click the inn*/
function callRestHero(){
    rest(hero);
    monsterPoss()
    damageField.innerHTML
}
document.getElementById("inn").addEventListener("click", callRestHero);


/*pick up Item function */
function pickUpItem(person, weapon){
    person.inventory.push(weapon);
}

/*call pickupitem function for hero when you click the dagger*/
const dagger = {
    type: "dagger",
    damage: 2
};
function callpickUpDagger(){
    pickUpItem(hero, dagger);
    monsterPoss()
    daggerImage = document.getElementById("dagger")
    daggerImage.style.display = "none"
   
}
document.getElementById("dagger").addEventListener("click", callpickUpDagger);


/*equip a weapon function*/
function equipWeapon(person){
    if(!person.inventory[0]){
        return null
    }
    person.weapon = person.inventory[0];
    const currentWeapon = person.weapon.type;
    document.getElementById(`weaponStat-${hero.name}`).innerHTML = `Weapon: ${currentWeapon}`

    const currentDamage = person.weapon.damage;
    document.getElementById(`damageStat-${hero.name}`).innerHTML = `Your weapon does ${currentDamage} damage`
}

/*onclick equip first item in inventory*/
function callequipWeapon(){
    equipWeapon(hero);
    monsterPoss()
}
document.getElementById("bag").addEventListener("click", callequipWeapon);

/*hero name input*/
function namePrompt(){
    let heroName = prompt("Good afternoon mysterious stranger, what is your name?");
    
    /*if empty reprompt */
    while(!heroName) {
        heroName = prompt("We don't like strangers here, tell us your name")
    }
    
    /*create placeholder to put name*/
    const whatToDo = document.createElement("p")
    whatToDo.innerHTML = `What would you like to do, ${heroName}`
        const nameSection = document.getElementById("name")
        nameSection.appendChild(whatToDo)
    /*also add it to the object*/
    hero.name = heroName;
    displayStats(hero)
    monsterPlaceHolder(monsters)
    monsterPoss()
}

/* Write displayStats function that writes your hero's name, health, weapontype, weapon damage to the page. Call it at the end of your script*/
function displayStats(person){
        
    /*stats you need*/
     const nameValue = person.name
     const healthValue = person.health
     const weaponValue = person.weapon.type
     const damageValue = person.weapon.damage
     

    /*place for stats to go*/
    nameField = document.createElement("p")
    healthField = document.createElement("p")
    weaponField = document.createElement("p")
    damageField = document.createElement("p")
    playerStatsField = document.createElement("div")

    /*create id for all*/
    nameField.id = `nameStat-${nameValue}`
    healthField.id = `healthStat-${nameValue}`
    weaponField.id = `weaponStat-${nameValue}`
    damageField.id = `damageStat-${nameValue}`
    playerStatsField.id = "playerStat"


    //*IF NO WEAPON THEN DISPLAY damage empty*//
    const damageWeaponOrNo = ()=> {
        if(!weaponValue) {
        return `You do no damage`          
      }else{
          return `Does ${damageValue} damage`
        }}

    /*add stats to their fields*/
    nameField.innerHTML = `Name: ${nameValue}`
    healthField.innerHTML = `Health: ${healthValue}`
    weaponField.innerHTML = `Weapon: ${weaponValue}`
    damageField.innerHTML = damageWeaponOrNo()
    

    /*add all fields together*/
    statsField = document.getElementById("stats")
    playerStatsField.appendChild(nameField)
    playerStatsField.appendChild(healthField)
    playerStatsField.appendChild(weaponField)
    playerStatsField.appendChild(damageField)
    statsField.appendChild(playerStatsField)

}

/*create enemies*/
function Monster(name, healthnum, damagenum, weapontype, imgurl) {
    this.name = name;
    this.health = healthnum;
    this.weapon = {
        type: weapontype,
        damage: damagenum
    }
    this.catchPhrase = `A ${this.name} appeared, they atack you with their ${this.weapon.type}`
    this.img = imgurl
}

/*select one monster randomly*/
function selectRandomMonster(){
    let randomNumber = Math.floor(Math.random()*monsters.length)
    randomMonster = monsters[randomNumber]
    randomMonsterImage = document.getElementById(randomMonster.name) 
    console.log(randomMonsterImage)
    randomMonsterImage.style.display = "block"
    displayStats(randomMonster)
}

function monsterPoss(){
    let randomNumber = Math.floor(Math.random()*4)
    if(randomNumber >= 2){
        return selectRandomMonster()
    }
    return null
}


/*createsPictures for each monster*/
function monsterPlaceHolder(monsters){
    monsters.forEach(monster => {
        const monsterimage = document.createElement("img")
        monsterimage.src = monster.img
        monsterimage.classList.add("picture")
        monsterimage.id = monster.name
        monsterimage.style.display = "none"
        const monsterPlace = document.getElementById("options")
        monsterPlace.appendChild(monsterimage)
    });
}