
export function wahtMyType<T>(argument: T ): T {


    return argument;
}

const amIString = wahtMyType<string>('Hola mundo');
const amINumber = wahtMyType<number>(100);
const amIArray = wahtMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' ') );
console.log(amINumber.toFixed() );
console.log(amIArray.join('-') );



