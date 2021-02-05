import React from 'react';
import './styles.css';

import Logomenu from '../../assets/img/loginicon.png';
import BoxBloco from '../../assets/img/boxbloco1.png';

const Menubarra = () => (
  <div className="Banner">
    <div className="ContentBanner1">
      <div className="teste">
        <img className="MenuIcon" src={Logomenu} />
      </div>
    </div>
    <div className="ContentBanner2">
      <div className="alignText"><h1>Não se preocupe com a parte<br /> jurídica da sua empresa</h1> 
      </div>
    </div>
      <div className="ContentBanner3">
        <div className="alignText1">
          <p className="PBox">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
  </div>
);

export default Menubarra;