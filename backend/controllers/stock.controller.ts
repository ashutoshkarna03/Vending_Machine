import Stock, { IStock } from '../models/stock.model';
// import { CreateQuery } from 'mongoose';

export async function CreateStock(itemStock: object, coinStock: number) {
    const stock: IStock = new Stock({
        itemStock,
        coinStock
    });

    await stock.save();
}

export async function GetStock() : Promise<object> {
    const stock : object = await Stock.find({}, {itemStock:1, coinStock:1});
    return stock
}

