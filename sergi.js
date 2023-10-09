// pirveli davaleba
let name = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28}
]
function getName (user){
    let age = user[0].age;
    for(let i = 0;i < user.length;i++){
        if(age > user[i].age){
            age = user[i].age
        }
    }
    return age
}
let getLessAge = getName(name);
console.log(getLessAge)



// meore davaleba
function oneElement(user){
    let twoThings = {
        name: 'sergi',
        age: '18',
        adress: 'tbilisi'
    }
    let thesame = {
        name: twoThings.name,
        age: twoThings.age,
        adress: twoThings.adress
    }
    return thesame
}
let result = oneElement();
console.log(result)


// mesame davaleba
function rollDie(){
    return parseInt(Math.random() * 6) + 1;
}

function playGame(){
    let a = 0;
    let b = 0;
    
    while(a !== 6 && b !==6){
        a = rollDie();
        b = rollDie();
        console.log(`Die A: ${a}, Die B: ${b}`);
        if(a === 6){
            console.log('Die A wins')
        }else if(b === 6){
            console.log('Die B wins')
        }
    }
}
playGame()