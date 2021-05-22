import mongoose, { Schema, Document } from 'mongoose';


export interface IStock extends Document {
    itemStock: object;
    coinStock: number;
}

const StockSchema: Schema = new Schema({
    itemStock: { type: Object, required: true },
    coinStock: { type: Number, required: true },
}, { timestamps: true });


export default mongoose.model<IStock>('stock', StockSchema);
