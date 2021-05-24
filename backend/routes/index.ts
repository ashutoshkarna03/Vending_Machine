import { TRoutesInput } from '../types/routes';
import * as stockController from '../controllers/stock.controller';
import * as vendingController from '../controllers/vending.controller';

export default ({ app }: TRoutesInput) => {

    app.get('/vending', (req,res) => res.send('Hello World'));

    app.post('/stock/create-stock', async (req, res) => {
        const itemStock: object = req.body.itemStock
        const coinStock: number = req.body.coinStock
        await stockController.CreateStock(
            itemStock,
            coinStock,
        );
        res.send({message:'Stock saved'});
    })

    app.get('/stock/get-stock', async (req, res) => {
        const data = await stockController.GetStock();
        res.send({
            success: true,
            data
        });
    })

    app.post('/vending/create-transaction', async (req, res) => {
        const itemToGet: string = req.body.itemToGet
        const coinEntered: number = req.body.coinEntered
        const data : object = await vendingController.CreateTransaction(itemToGet, coinEntered);
        res.send(data);
    })

}