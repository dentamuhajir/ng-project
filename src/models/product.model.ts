export class Product {
    constructor(
        id: number,
        title:  string,
        description: string,
        price: string
    ){}
}

export class ListProduct {
    idX: number;
    titleX:  string;
    priceX: number;
    descriptionX: string;


    constructor(id: number, title: string, price: number, description: string){
        this.idX = id
        this.titleX = title
        this.descriptionX = description
        this.priceX = price
    }
}