//retuns an input as an integer
function getValue(element) {
    return parseFloat(element);
};
//takes a parameter of an html form element and runs the getValue function
function form(x) {
    element = document.querySelector(x).value;

    return getValue(element);
};
//A list of abilities to be chosen by user for each card
var abilityList = ['Indestructable', 'Death Touch', 'First Strike', 'Double Strike', 'Lifelink', 'Trample'];
var char1 = document.querySelector('#char1');
var char2 = document.querySelector('#char2');
var fragment = document.createDocumentFragment();
//Populates the abilities that the user can add to each card
abilityList.forEach(function(ability, index) {
    var opt = document.createElement('option');
    opt.innerHTML = ability;
    opt.value = ability;
    fragment.appendChild(opt);
});
char1.appendChild(fragment);
abilityList.forEach(function(ability, index) {
    var opt = document.createElement('option');
    opt.innerHTML = ability;
    opt.value = ability;
    fragment.appendChild(opt);
});
char2.appendChild(fragment);

//Adds abilities as the user clicks on them from the drop-down list
var input1 = document.querySelector('#char1').value;
var input2 = document.querySelector('#char2').value;
var addButton1 = document.querySelector('#add1');
var addButton2 = document.querySelector('#add2');
cardA1 = [];
cardA2 = [];
//adds abilities to a list depending on which card is being added to
function addAbility(input, chart) {
    chart.push(input);
};
//calls the addAbility function
addButton1.addEventListener('click', addAbility(input1, cardA1));
addButton2.addEventListener('click', addAbility(input2, cardA2));
//gathers all information about the cards and simulates a battle.
function battle(cardA1, cardA2) {
    //set variables for info on card 1
    let card1Name = form('#name1');
    let card1Power = form('#power1');
    let card1Tough = form('#tough1');
    abilities1 = cardA1
    //set variables for info on card 2
    let card2Name = form('#name2');
    let card2Power = form('#power2');
    let card2Tough = form('#tough2');
    abilities2 = cardA2
    //goes through possible comparisons and outcomes of fights to determine a winner
    if (abilities1.includes('Indestructable') == true) { //card 1 cannot die
        if (abilities2.includes('Indestructable') == true){ //card 2 also cannot die
            winner = 'Draw';
        } else if (card1Power >= card2Tough) { //card 1 cannot die and can kill card with power
            winner = card1Name;
        } else if (card1Power < card2Tough) { //card 1 cannot die and cannot kill card 2 with power
            if (abilities1.includes('Death Touch') == true) { //card 1 cannot die, cannot kill card 2 with power, but has death touch
                winner = card1Name;
            } else {winner = 'Draw';}; //card 1 cannot die and cannot kill card 2 in any way
        } else {winner = 'Error';}; //Debugging prompt
    } else if (abilities2.includes('Indestructable') == true) { //card 2 cannot die
        if (card2Power >= card1Tough) { // card 2 cannot die and can kill card 1 with power
            winner = card2Name;
        } else if (card2Power < card1Tough) { //card 2 cannot die but cannot kill card 1 with power
            if (abilities2.includes('Death Touch') == true) { //card 2 cannot die, cannot kill card 1 with power but has death Touch
                winner = card2Name;
            } else {winner = 'Draw';}; //card 2 cannot die and cannot kill card 2 in any way
        } else {winner = 'Error';}; //Debugging promt
    } else if (card1Power >= card2Tough) { //card 1 can kill card 2
        if (card2Power >= card1Tough) { //cards would normally have enough power to kill eachother
            if (abilities1.includes('First Strike') == true || abilities1.includes('Double Strike') == true) { //cards have power to kill eachother but card 1 hits first
                if (abilities2.includes('First Strike') == true) { //cards have power to kill eachother but hit at same time
                    winner = 'draw';
                } else if (abilities2.includes('Double Strike') == true) { //cards have power to kill eachother but hit at same time but different
                    winner = 'draw';
                } else {winner = card1Name}; //card 1 can kill card 2 first
            } else if (abilities2.includes('First Strike') == true || abilities2.includes('Double Strike') == true) { //cards have power to kill eachother but card 2 hits first
                if (abilities1.includes('Double Strike') == true) { //cards hit at the same time
                    winner = 'draw';
                } else {winner = card2Name}; //card 2 can kill card 1 first
            } else {winner = 'error';};
        } else if (abilities2.includes('Death Touch') == true) {//card 1 kills card 2 but is killed from death touch
            winner = 'draw';
        } else {winner = card1Name;}; //card 1 kills card 2
    } else if (card2Power >= card1Tough) { //card 2 can kill card 1
        if (card1Power >= card2Tough) { //cards would normally have enough power to kill eachother
            if (abilities2.includes('First Strike') == true || abilities2.includes('Double Strike') == true) { //cards have power to kill eachother but card 2 hits first
                if (abilities1.includes('First Strike') == true) { //cards have power to kill eachother but hit at same time
                    winner = 'draw';
                } else if (abilities1.includes('Double Strike') == true) { //cards have power to kill eachother but hit at same time but different
                    winner = 'draw';
                } else {winner = card2Name}; //card 2 can kill card 1 first
            } else if (abilities1.includes('First Strike') == true || abilities1.includes('Double Strike') == true) { //cards have power to kill eachother but card 1 hits first
                if (abilities2.includes('Double Strike') == true) { //cards hit at the same time
                    winner = 'draw';
                } else {winner = card1Name}; //card 1 can kill card 2 first
            } else {winner = 'error';};
        } else if (abilities1.includes('Death Touch') == true) {//card 2 kills card 1 but is killed from death touch
            winner = 'draw';
        } else {winner = card2Name;}; //card 2 kills card 1
    } else {'error'};//Debugging prompt

    document.querySelector('#winnerResult').innnerHTML = winner;
};

document.querySelector('#battle').addEventListener('click', battle);