
import Vending, { IVending } from '../models/vending.model';
import * as stockController from './stock.controller';

interface RateInterface {
    coke: number;
    pepsi: number;
    dew: number;
}

const rateObj: RateInterface = {
    coke: 20,
    pepsi: 25,
    dew: 30,
}

export async function CreateTransaction(itemToGet: string, coinEntered: number) {
    // get the current stock document
    const stock: any = await stockController.GetStock()
    console.log(stock)

    // get the stock of item to get
    const itemStock = stock.itemStock[itemToGet]
    console.log('Item Stock: ', itemStock)

    // figure out price
    let itemPrice : number
    if (itemToGet === 'coke') {
        itemPrice = rateObj.coke
    } else if (itemToGet === 'pepsi') {
        itemPrice = rateObj.pepsi
    } else {
        itemPrice = rateObj.dew
    }
    console.log('Item Price: ', itemPrice)

    // check for edge cases

    // 1. check if stock for given item is available or not
    if (itemStock === 0) {
        return {data: {}, message: 'Item is not available'}
    }

    // 2. check if entered coin is enough to buy
    if (coinEntered < itemPrice) {
        return {data: {}, message: 'Coin is not enough to buy this item, please try again'}
    }

    const returnChange : number = 0
    // perform the transaction and calculate returnChange if any
    

    return {data: 'world', message: 'world'}
}

