
import React from 'react';
import './styles.css';

class EuaTax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selecNumber:0,
      resultState:1,
      dolarClean:0
    };
  }
  
  render() {
    return (
           
<div className= "EuaTax">

<table className="EuaTable">
  <tbody>
    <td>Para: Dolar</td>
    <td>{(this.props.dolarValue * this.state.resultState * 1.0638 ).toFixed(2)}</td>
  </tbody>

</table> 
</div>
  )}}

  export default EuaTax
