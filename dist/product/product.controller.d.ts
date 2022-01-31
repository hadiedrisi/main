import { HttpService } from '@nestjs/axios';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    private httpService;
    constructor(productService: ProductService, httpService: HttpService);
    all(): Promise<(import("./product.model").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    like(id: number): Promise<void>;
    productCreate(product: any): Promise<void>;
    productUpdate(product: any): Promise<void>;
    productDelete(id: number): Promise<void>;
}
