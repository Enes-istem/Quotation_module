
import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Quotation from './Quotation'
import QuotationListeleme from './QuotationListeleme'
import QuotationOlusturma from './QuotationOlusturma'



const QuotationModule = (props) => {
  
  // console.log("userContextDısaridan : ", props);
  // const [datas,setDatas] = useState([{name: "enes", surname: "iştem"}])

  return (
   
    <>
      <Route exact path = "/quotation" component = {Quotation} />
     <Route exact path = "/quotation/listeleme" component = {QuotationListeleme} />
     <Route exact path = "/quotation/olusturma" component = {QuotationOlusturma} />

</>

  );
};

export default QuotationModule;

