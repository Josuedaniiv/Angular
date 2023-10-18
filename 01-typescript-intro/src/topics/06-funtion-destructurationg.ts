
export interface Product {
    description: string;
    price: number;

}

const phone: Product = {
    description: 'Samsung s22',
    price: 330
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation( options: TaxCalculationOptions): [number, number] {

    const { tax, products } = options;

    let total = 0;

    options.products.forEach( ({price}) => {
        total += price;
    } )

    return [total, total * options.tax];

}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [ total , taxresult ] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})

//console.log('Total', total);
//console.log('Tax', taxresult);

