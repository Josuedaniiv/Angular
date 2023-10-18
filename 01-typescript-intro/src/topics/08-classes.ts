


export class Person {
    //public name: string;
    //public address: string;

    constructor( 
        public fristName: string = 'No Person',
        public LastName: string = 'Not found',
        public address: string = 'No address' ) {
        
    }

}

//export class Hero extends Person {
//
//    constructor(
//        public alterEgo: string,
//        public age: number,
//        public realName: string,
//    ) {
//        super(realName, 'Maracaibo' );
//    }
//}

export class Hero {

    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
     
        this.person = new Person(realName)
    }
}
const person = new Person('Josue','Stark','Maracaibo');

const people = new Hero('Iroman', 45, 'Daniel', person);

console.log(people)


