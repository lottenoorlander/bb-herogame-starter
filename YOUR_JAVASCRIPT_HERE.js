// Write your JS here

/*hero Object*/
const hero = {
    name: "Lotte", 
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

