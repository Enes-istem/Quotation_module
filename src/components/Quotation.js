import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'



function Quotation(props) {
    
    // const myContext = useContext(props.userContext)
    // console.log("myContext : ", myContext);
    return (
        <div>
            <h1>QUOTATION PAGE Page</h1>
            <Link to = "/quotation/listeleme">Quotation Listeleme Sayfası</Link>
            <Link to = "/quotation/olusturma">Quotation Olusturma Sayfası</Link>

            {/* <h2>{`${props.name} adlı kişi ${props.age} yaşındadır. `}</h2>
            <h1>{myContext}</h1> */}
        </div>
    )
}

export default Quotation
