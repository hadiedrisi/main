import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    all(): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(data: any): Promise<Product>;
    findOne(id: number): Promise<Product>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<void>;
}
