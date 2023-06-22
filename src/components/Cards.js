import React from 'react';
import  broudct from '../cards.json'
import Card from './card';



const Cards = () => {
    return (
        <div className="App container justify-content-center">
       {
        broudct.map( ({id, name, desc, image, price }) => {
          return(
            <div className="box mb-5">
              <Card key={id} src={image} name={name} desc={desc} price={price}/>
            </div>
          )
        })
       }
    </div>
    );
}

export default Cards;
