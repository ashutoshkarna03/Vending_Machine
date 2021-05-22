import Stock, { IStock } from '../models/stock.model';
// import { CreateQuery } from 'mongoose';

async function CreateStock(itemStock: object, coinStock: number) {
    const stock: IStock = new Stock({
        itemStock,
        coinStock
    });

    await stock.save();
}

async function GetStock() : Promise<object> {
    let stock : object = await Stock.find();
    return stock
}

// module.exports = {
//     CreateStock: CreateStock,
//     GetStock: GetStock
// }
module.exports.CreateStock = CreateStock
module.exports.GetStock = GetStock
