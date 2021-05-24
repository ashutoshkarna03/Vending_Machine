import Stock, { IStock } from '../models/stock.model';

export async function CreateStock(itemStock: object, coinStock: number) {
    const stock: IStock = new Stock({
        itemStock,
        coinStock
    });

    await stock.save();
}

export async function GetStock() {
    const stock = await Stock.findOne({}, {itemStock:1, coinStock:1});
    return stock
}

