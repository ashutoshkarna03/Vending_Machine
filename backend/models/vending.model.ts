import mongoose, { Schema, Document } from 'mongoose';


export interface IVending extends Document {
    itemPurchased: string;
    coinEntered: number;
    returnChange: number;
}

const VendingSchema: Schema = new Schema({
    itemPurchased: { type: String, required: true },
    coinEntered: { type: Number, required: true },
    returnChange: { type: Number, required: true },
}, { timestamps: true });


export default mongoose.model<IVending>('vending', VendingSchema);