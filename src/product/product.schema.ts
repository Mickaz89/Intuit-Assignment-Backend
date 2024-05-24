import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProductModel extends Document {
  @Prop()
  content: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
