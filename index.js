// if else example 
//gender check and fill full word

let people = [
    {name:'john',age:30},
    {name:'Jane',age:20,gender:'f'},
    {name:'Jack',age:40,gender:'m'}
]
//if else coding
people=people.map(person=>{
    if(person.gender){
        if(person.gender==='m')
            person.gender="male"
        if(person.gender==='f')
            person.gender="female"
    }
    else
        person.gender="unknown"
    return person
})
console.log(people); 

//with else if

people=people.map(person=>{
    if(person.gender==='m')
        person.gender="male"
    else if(person.gender==="f")
        person.gender="female"
    else
        person.gender="unknown"
    return person
})
console.log(people);