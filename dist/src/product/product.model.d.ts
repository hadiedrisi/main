import { Document } from "mongoose";
export declare type ProductDocument = Product & Document;
export declare class Product {
    id: number;
    title: string;
    image: string;
    likes: number;
}
export declare const ProductShema: import("mongoose").Schema<Document<Product, any, any>, import("mongoose").Model<Document<Product, any, any>, any, any, any>, any, any>;
