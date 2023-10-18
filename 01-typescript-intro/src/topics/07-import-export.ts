import { Product } from './06-funtion-destructurationg'
import {taxCalculation } from './06-funtion-destructurationg'

const shoppinCart: Product[] = [
    { 
        description: 'Apple',
        price: 1200
    },
    {
        description: 'Xiaomi',
        price: 450
    }
];

// tax = 0.15
const [ total, tax ] = taxCalculation ({
    products: shoppinCart,
    tax: 0.15
});


console.log('Total', total);
console.log('Tax', tax);

