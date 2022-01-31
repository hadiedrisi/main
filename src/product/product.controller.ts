import { HttpService } from '@nestjs/axios';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService,
        private httpService:HttpService
        ){}

    @Get()
    async all(){
        return this.productService.all();
    }
    @Post(':id/like')
    async like(@Param('id') id:number)
    {
        this.httpService.post(`http://localhost:8000/${id}/like`,{}).subscribe(res=>{
            console.log(res);
        })
    }

    @EventPattern('PRODUCT_CREATE')
    async productCreate(product:any){
        await this.productService.create({
            id:product.id,
            likes:product.likes,
            title:product.title,
            image:product.image
        });
    }
    @EventPattern('PRODUCT_UPDATE')
    async productUpdate(product:any){
        await this.productService.update(product.id,{
            id:product.id,
            likes:product.likes,
            title:product.title,
            image:product.image
        })
    }
    @EventPattern('PRODUCT_DELETE')
    async productDelete(id:number){
        this.productService.delete(id)
    }
} 
