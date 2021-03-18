// ZADANIE1
/*
class Person{
    name:string;
    surname:string;
    age:number;

    constructor(name:string, surname:string, age:number){
        this.name = name,
        this.surname = surname,
        this.age = age
    }

    Show(){
        // document.body.innerHTML = `<h2>Witaj ${this.name} ${this.surname} mam ${this.age} lat</h2>`
        return `Witaj ${this.name}`;
    }
}

let p = new Person("John", "Blake", 11);
p.Show();
*/


//ZADANIE2

interface Person {
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
        name: string;
        surname: string;
        age: number;
        role: string;
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
        console.log(`Imie: ${person.name} Nazwisko: ${person.surname} Wiek: ${person.age}`);
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
                
        return (
            persons.filter(obj => obj.name === criteria)
        )
        
    }
    
    

    

    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    console.log("ZADANIE1");
    users.forEach(logPerson);
    admins.forEach(logPerson);

    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    console.log("ZADANIE2");
    const persons: Person[] = [...admins,...users];
    persons.forEach(logPerson);

    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    console.log("ZADANIE3");
    const ageTab: Person[] = persons.filter(person => person.age > 25);
    ageTab.forEach(logPerson);

    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
    console.log("ZADANIE4")
     const filtered = filterPersons(persons, "Adam");
     filtered.forEach(logPerson)
     