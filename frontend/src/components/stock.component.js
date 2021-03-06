import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Stock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemStock: {
        coke: 10,
        dew: 10,
        pepsi: 10
      },
      coinStock: 100
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5050/stock/get-stock/')
      .then(response => {
        console.log(response.data) 
        let data = response.data.data
        this.setState({ itemStock: data.itemStock, coinStock: data.coinStock, })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  

  render() {
    return (
      <div>
        <h3>Stock</h3>
        <div>
          <h4>Items Stock</h4>
          <ul>
            <li>Coke: {this.state.itemStock.coke}</li>
            <li>Pepsi: {this.state.itemStock.pepsi}</li>
            <li>Dew: {this.state.itemStock.dew}</li>
          </ul>
        </div>
        <div>
          <h4>Coins Stock</h4>
          <ul>
            <li>Coins: {this.state.coinStock}</li>
          </ul>
        </div>
      </div>
    )
  }
}