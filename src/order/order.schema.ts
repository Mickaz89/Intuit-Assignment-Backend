import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class OrderModel extends Document {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  phone: string;

  @Prop()
  items: [];

  @Prop()
  total: number;
}

export const OrderSchema = SchemaFactory.createForClass(OrderModel);
