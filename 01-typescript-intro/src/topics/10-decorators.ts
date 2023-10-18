function classDecorator(
    constructor: T
) {
     return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
     }
}





@classDecorator
export class superClass {

    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola mundo')
    }
}

console.log( superClass );

const myClass = new superClass();
console.log( myClass )


