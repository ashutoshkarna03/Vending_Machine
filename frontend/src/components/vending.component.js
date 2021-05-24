import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Vending extends Component {
  constructor(props) {
    super(props);
    this.onChangeItem = this.onChangeItem.bind(this);
    this.onChangeCoin = this.onChangeCoin.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  

    this.state = {
      itemPurchased: 'N/A',
      pricePaid: 'N/A',
      returnChange: 'N/A',
      message: ''
    };
  }

  onChangeItem(e) {
    this.setState({
      itemPurchased: e.target.value
    })
  }

  onChangeCoin(e) {
    this.setState({
      pricePaid: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const payload = {
      itemToGet: this.state.itemPurchased,
      coinEntered: this.state.pricePaid,
    }

    console.log(payload);

    axios.post('http://localhost:5050/vending/create-transaction', payload)
      .then(res => {
        console.log(res.data);
        if (res.data.data && res.data.data.returnChange) {
          this.setState({
              itemPurchased: res.data.data.itemBought,
              returnChange: res.data.data.returnChange,
              message: res.data.message
          })
        } else {
          this.setState({
            itemPurchased: 'N/A',
            pricePaid: 'N/A',
            returnChange: 'N/A',
            message: res.data.message
          })
        }
        
      });

  }
  

  render() {
    return (
      <div>
        <h3>Welcome to Vending Machine</h3> 

        <h4>Items available with price: </h4>
        <ul>
          <li>Coke: Rs 20</li>
          <li>Pepsi: Rs 25</li>
          <li>Dew: Rs 30</li>
        </ul>
        <div>
          <form onSubmit={this.onSubmit}>
            <label>
              Select Item you want to get:
              <br></br>  
              <select name="item" id="item" onChange={this.onChangeItem}>
                <option value="coke">Coke</option>
                <option value="pepsi">Pepsi</option>
                <option value="dew">Dew</option>
              </select>
            </label>
            <br></br> 
            <label>Enter Coins: </label>
            <br></br> 
            <input name="coin" id="coin" type="text" onChange={this.onChangeCoin}></input>
            <br></br> 
            <br></br>
            <input type="submit" value="Submit" />
            <br></br>
          </form>
        </div>
        <br></br> 
        <div>
          <p>{this.state.message}</p>
        </div>
        <div>
        <br></br>
          <h5>Your Transaction Summary</h5>
          <p>You got one <strong>{this.state.itemPurchased}</strong></p>
          <p>You entered Rs. {this.state.pricePaid} And received return change of Rs. {this.state.returnChange}</p>
        </div>
      </div>
    )
  }
}