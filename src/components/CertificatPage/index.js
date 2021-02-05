import React from 'react';
import './styles.css';

import Logomenu from '../../assets/img/selobacen.png';

const CertificatePage = () => (
  <div className="CertificatePage">
    <div className="huehue">
      <h1>Lorem impsum is simply dummy text of</h1>
      <h2>para Operações de câmbio</h2>
      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      <a className="n" href="http://localhost:3000/home"> Orientação Técnica </a>
    </div>
    <div>
      <div>
      <img className="LogoMenu" src={Logomenu} />
      <img className="LogoMenu" src={Logomenu} />
      </div>
      <div>
        <h1></h1>
        <p></p>
      </div>
    </div>
  </div>
);

export default CertificatePage;