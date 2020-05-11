//OBJECT DESTRUCTURING

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

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher;

    console.log(publisherName);
*/



//ARRAY DESTRUCTURING
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19149'];
const [, city, state = 'Arizona'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Espresso', '$2.00', '$2.50', '$2.75'];

const [coffee, , doubleShot] = item;

console.log(`A double shot of ${coffee} costs ${doubleShot}`);