
export interface Passenger {
    name: string;
    children?: string[];
}


const passenger1: Passenger = {
    name: 'Josue',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Midu', 'Dev'],
}



const printChildren = ( passenger: Passenger) =>{
    
    const howManyChildrem = passenger.children?.length;

    console.log( passenger.name, howManyChildrem );
}

printChildren( passenger2 );