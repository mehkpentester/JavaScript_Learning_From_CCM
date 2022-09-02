// switch statement 
//check expression 

let people = [
    {name:"kyaw Khaing",age:27,gender:"m"},
    {name:"khin khin",age:20},
    {name:"Nu Nu",age:18,gender:"f"}
]

people=people.map((person)=>{
    switch(person.gender){
        case "m":
            person.gender="male"
            break;
        case "f":
            person.gender="female"
            break;
        default :
            person.gender="unknown"
    }
    return person;
})
console.log(people);