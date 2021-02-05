import React, { Component } from 'react';


import './styles.css';

export default class DivisionMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      moneyValue: 0,
    };
  }
  
  render() {
    const { products, moneyValue } = this.state;

  return (
    <div className= "DivisionMoney">
          
          <h2>De: Real</h2>
          <input 
            value={this.props.inputValue} 
            onChange={(e) => {this.props.onChange(e.target.value)}}
            maxLength={9}
          />
    </div>
  );}
}


