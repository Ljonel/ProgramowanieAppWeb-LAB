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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    console.log("Imie: " + person.name + " Nazwisko: " + person.surname + " Wiek: " + person.age);
}
function filterPersons(persons, criteria) {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    return (persons.filter(function (obj) { return obj.name === criteria; }));
}
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
console.log("ZADANIE1");
users.forEach(logPerson);
admins.forEach(logPerson);
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
console.log("ZADANIE2");
var persons = __spreadArray(__spreadArray([], admins), users);
persons.forEach(logPerson);
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
console.log("ZADANIE3");
var ageTab = persons.filter(function (person) { return person.age > 25; });
ageTab.forEach(logPerson);
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
console.log("ZADANIE4");
var filtered = filterPersons(persons, "Adam");
filtered.forEach(logPerson);
