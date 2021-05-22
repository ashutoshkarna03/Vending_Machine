import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

export default class Vending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemPurchased: 'N/A',
      pricePaid: 'N/A',
      returnChange: 'N/A',
    };
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
          <form onSubmit={this.handleSubmit}>
            <label>
              Select Item you want to get:
              <br></br>  
              <select name="item" id="item">
                <option value="coke">Coke</option>
                <option value="pepsi">Pepsi</option>
                <option value="dew">Dew</option>
              </select>
            </label>
            <br></br> 
            <label>Enter Coins: </label>
            <br></br> 
            <input name="coin" id="coin" type="text"></input>
            <br></br> 
            <br></br>
            <input type="submit" value="Submit" />
            <br></br>
          </form>
        </div>
        <div>
        <br></br>
          <h5>Your Transaction Summary</h5>
          <p>You got one {this.state.itemPurchased} at Rs. {this.state.pricePaid}</p>
          <p>And received change of Rs. {this.state.returnChange}</p>
        </div>
      </div>
    )
  }
}