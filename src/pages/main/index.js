import React, { Component } from 'react';

import api from '../../services/api';
//import { unregisterDecorator } from 'handlebars';

import './styles.css';

export default class Main extends Component {
  state = {
    products: {},
  }
  
  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async () => {
    const { data: { USD } } = await api.get('/all/USD-BRL')
    console.log(USD)
    this.setState({ products: USD});
  };

  render() {

    const { products } = this.state;

  return (
    <div className= "USD">
        <table className="ViewDolar">
          <thead>
            <td>Código :</td>
            <td>Valor</td>
            <td>Venda</td>
            <td>máxima</td>
            <td>mínima</td>
            <td>Valor</td>
            <td>Var</td>
            <td>Var.%</td>
            <td>hora</td>
          </thead>
          <tbody>
            <td>USD/BRL</td>
            <td>{products.code}</td>
            <td>{products.code}</td>
            <td>{products.high}</td>
            <td>{products.low}</td>
            <td>{products.varBid}</td>
            <td>{products.pctChange}</td>
            <td>{products.bid}</td>
            <td>{products.ask}</td>
          </tbody>
          <tbody>
            <td>EUR/USD</td>
            <td>{products.code}</td>
            <td>{products.code}</td>
            <td>{products.high}</td>
            <td>{products.low}</td>
            <td>{products.varBid}</td>
            <td>{products.pctChange}</td>
            <td>{products.bid}</td>
            <td>{products.ask}</td>
          </tbody>
          <tbody>
            <td>USD/JPY</td>
            <td>{products.code}</td>
            <td>{products.code}</td>
            <td>{products.high}</td>
            <td>{products.low}</td>
            <td>{products.varBid}</td>
            <td>{products.pctChange}</td>
            <td>{products.bid}</td>
            <td>{products.ask}</td>
          </tbody>
          <tbody>
            <td>GBP/USD</td>
            <td>{products.code}</td>
            <td>{products.code}</td>
            <td>{products.high}</td>
            <td>{products.low}</td>
            <td>{products.varBid}</td>
            <td>{products.pctChange}</td>
            <td>{products.bid}</td>
            <td>{products.ask}</td>
          </tbody>
        </table>
        <div className="ComponentConversionM">
          <h1>Conversor de Moeda</h1>
          <p className="ComponentP">Para saber a cotação da moeda desejada basta<br /> clicarna bandeira e selecionar o páis desejado </p>
        </div>
    </div>
  )}
}
