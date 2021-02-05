import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

export default class Viewmoney extends Component {
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
    <div className= "Viewmoney">
{/*         
    <table>
    <thead>
      <td>Preço Dolar</td>
    </thead>
    <thead>
    <td>{products.high}</td>    
    </thead>
    </table> */}
  </div>
  )}
}
