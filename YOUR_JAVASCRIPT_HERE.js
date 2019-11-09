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

/*rest function*/
function rest(person){
    if(person.health === 10){
        alert("You're already at full health")
    }
        person.health = 10;
        return person;
}

/*call rest function for hero when you click the inn*/
function callRestHero(){
    rest(hero);
}
document.getElementById("inn").addEventListener("click", callRestHero);


/*pick up Item function */
function pickUpItem(person, weapon){
    person.inventory.push(weapon);
}

/*call pickupitem function for hero when you click the inn*/
const dagger = {
    type: "dagger",
    damage: 2
};
function callpickUpDagger(){
    pickUpItem(hero, dagger);
}
document.getElementById("dagger").addEventListener("click", callpickUpDagger);


/*equip a weapon function*/
function equipWeapon(person){
    if(!person.inventory[0]){
        return null
    }
    person.weapon = person.inventory[0];
}

/*onclick equip first item in inventory*/
function callequipWeapon(){
    equipWeapon(hero);
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

    //*IF NO WEAPON THEN DISPLAY damage empty*//
    const damageWeaponOrNo = ()=> {
        if(!weaponValue) {
        return `It does no damage`          
      }else{
          return `It does: ${damageValue} damage`
        }}

    /*add stats to their fields*/
    nameField.innerHTML = `Name: ${nameValue}`
    healthField.innerHTML = `Health: ${healthValue}`
    weaponField.innerHTML = `Weapon: ${weaponValue}`
    damageField.innerHTML = damageWeaponOrNo()
    

    /*add all fields together*/
    statsField = document.getElementById("stats")
    statsField.appendChild(nameField)
    statsField.appendChild(healthField)
    statsField.appendChild(weaponField)
    statsField.appendChild(damageField)

}
