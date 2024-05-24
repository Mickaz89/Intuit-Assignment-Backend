import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderModel } from './order.schema';
import { CreateOrderDto } from './dtos/create-order.dto';

export interface Order {
  name: string;
  address: string;
  city: string;
  phone: string;
  items: [];
  total: number;
}

@Injectable()
export class OrderService {
  constructor(@InjectModel('Order') private orderModel: Model<OrderModel>) {}

  async getOrders(): Promise<Order[]> {
    return this.orderModel.find({});
  }

  async createOrder(CreateOrderDto: CreateOrderDto): Promise<Order> {
    const { name, items, total } = CreateOrderDto;
    const task = new this.orderModel({ name, items, total });
    return task.save();
  }
}
