import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductModel } from './product.schema';
import { CreateProductDto } from './create-product.dto';

export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private productModel: Model<ProductModel>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.productModel.find({});
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const { name, description, price, image } = createProductDto;
    const task = new this.productModel({ name, description, price, image });
    return task.save();
  }
}
