export type product = {
    images:string,
    title:string,
    type:string,
    price:number,
    _id?:string,
    description?:string,
    productDetails?:string,
    _category?:string;
}

export type partialProduct = {
    images:string,
    title:string,
    price:string
    _id:string
}