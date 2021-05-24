import { TRoutesInput } from '../types/routes';
import * as stockController from '../controllers/stock.controller';

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
        const data : object = await stockController.GetStock();
        res.send({
            success: true,
            data
        });
    })

}