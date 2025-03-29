export const productsList:Product[] = [
    {id:1, name:'Product 1', price:10, description:'Description 1', color:'red'},
    {id:2, name:'Product 2', price:20, description:'Description 2', color:'blue'},
    {id:3, name:'Product 3', price:30, description:'Description 3', color:'green'},
    {id:4, name:'Product 4', price:40, color:'yellow'},    
    {id:5, name:'Product 5', price:50, description:'Description 5', color:'orange'},

]

export interface Product {
    id: number | string;
    name: string;
    price: number;
    description?: string;
    color: string;

}