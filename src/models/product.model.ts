export class Product {
    constructor(
        id: number,
        title:  string,
        description: string,
        price: string
    ){}
}

export class ListProduct {
    id!: number;
    title!:  string;
    description!: string;
    price!: number;
}