/*
const person ={
    name: 'Sam',
    age: 27,
    location: {
        city: 'Buckeye',
        temp: 102
    }
};

const {name = 'anonymous', age} = person;
console.log(`${name} is ${age}.`);

const {city, temp: temperature} = person.location;

if (city && temperature) {
    console.log(`It is ${temperature} in ${city}`);
}
*/

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher;

    console.log(publisherName);



