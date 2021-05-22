import { TRoutesInput } from '../types/routes';
import * from '../controllers/stock.controller';

export default ({ app }: TRoutesInput) => {

    app.get('/vending', (req,res) => res.send('Hello World'));

    app.post('/stock/create-stock', async (req, res) => {
        const itemStock: object = req.body.itemStock
        const coinStock: number = req.body.coinStock
        await CreateStock(
            itemStock,
            coinStock,
        );
        res.send('Stock saved');
    })

    app.post('/stock/create-stock', async (req, res) => {
        const itemStock: object = req.body.itemStock
        const coinStock: number = req.body.coinStock
        await CreateStock(
            itemStock,
            coinStock,
        );
        res.send({
            success: true,
            message: "Stock saved"
        });
    })

    app.get('/stock/get-stock', async (req, res) => {
        await GetStock(
            itemStock,
            coinStock,
        );
        res.send({
            success: true,
            message: "Stock saved"
        });
    })

}