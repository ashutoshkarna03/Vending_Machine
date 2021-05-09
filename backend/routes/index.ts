import { TRoutesInput } from '../types/routes';

export default ({ app }: TRoutesInput) => {
    app.get('/vending', (req,res) => res.send('Hello World'));
}