import './App.css';
import React from 'react';
import { HeaderMenu } from './Components/HeaderMenu/HeaderMenu';
import background from "./Resources/bitcoinBg.jpg";
import { TopHeaderContainer } from './Components/TopHeaderContainer/TopHeaderContainer';
import {Package} from './Components/Package/Package';


export const App = () : JSX.Element => {
  const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    zIndex: -1,
}
  return (
    <div style = {style} className = 'h-100'>
      <HeaderMenu></HeaderMenu>
      <TopHeaderContainer></TopHeaderContainer>
      <Package></Package>
    </div>
  );
}
