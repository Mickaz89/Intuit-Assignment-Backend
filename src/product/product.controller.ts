import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { Product, ProductService } from './product.service';
import { CreateProductDto } from './create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Post('create')
  async createTask(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }
}
