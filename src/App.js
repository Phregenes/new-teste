import React from 'react';

// import Main from './pages/main';

import NavBar from './components/NavBar';
import Menubarra from './components/Menubarra';
import Main from './pages/main';
import Viewmoney from './components/Viewmoney';
import DivisionMoney from './components/DivisionMoney';
import EuaTax from './components/EuaTax';
import ServisesHome from './components/ServisesHome';
// import CertificatePage from './components/CertificatePage';
// import BlogNews from './components/BlogNews';
// import ContactFooter from './components/ContactFooter';
// import Footer from './components/Footer';


import api from './services/api';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:'',
      products: {},
      dolarClean: ''
    };
  }

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async () => {
    // const { data: { USD } } = await api.get('/all/USD-BRL')
    const response = await api.get('/all/USD-BRL');
    this.setState({ products: response.data.USD});
  };

  convertMoney = () => {
    const { products } = this.state
    const high = products.high 

    //validação de existencia do dado
    if (high !== undefined) {
    // esto
      const dolarClean = Number(high.replace(',', '.'));
      return  this.state.inputValue / dolarClean;
    }
    
    return 0;
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <Menubarra />
        <Main />
        <Viewmoney />
        <DivisionMoney inputValue={this.state.inputValue} onChange={(value) =>{ 
          this.setState({
          inputValue: value
          })
        }
        } />
        <EuaTax 
          dolarValue={this.convertMoney()} 
          dolarClean={
            this.state.products.high !== undefined ?
            this.state.products.high.replace(',','.')
            : 0
          }
          inputValue={this.state.inputValue}
           />
            {/* <ServisesHome /> */}
            {/* <CertificatePage /> */}
            {/* <BlogNews /> */}
            {/* <ContactFooter />
            <Footer /> */}
      </div>
    );
  }
}

export default App;
